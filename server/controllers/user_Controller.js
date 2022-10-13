require('dotenv').config()
const nodemailer = require('nodemailer') //отправка письма на почту
const Api_Error = require('../error/Api_Error');
const bcrypt = require('bcrypt') // хэширование пароля
const jwt = require("jsonwebtoken") //генератор токена
const { User, Order } = require('../models/models')

const generateJwt = (id, email, roles) => {
    return jwt.sign(
        { id, email, roles },
        process.env.SECRET_KEY,
        { expiresIn: '24h' } //продолжительность жизни токена
    )
}

class User_Controller {
    async registration(req, res, next) {
        try {
            const { email, password, roles } = req.body
            if (!email || !password) {
                return next(Api_Error.bad_Request('Некорректный email или password'))
            }
            const candidate = await User.findOne({ where: { email } }) //проверка на уникальность
            if (candidate) {
                return next(Api_Error.bad_Request('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({ email, roles, password: hashPassword })
            const order = await Order.create({ userId: user.id })
            const token = generateJwt(user.id, user.email, user.roles)

            // const transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: process.env.EMAIL_LOGIN,
            //         pass: process.env.EMAIL_PASSWORD,
            //     }
            // })

            // const mailOptions = {
            //     from: process.env.EMAIL_LOGIN,
            //     to: process.env.EMAIL_LOGIN,
            //     subject: "Регистрация в CakeApp",
            //     text: "Email: " + email + "\nPassword: " + password
            // }

            // transporter.sendMail(mailOptions, (error, info) => { if (error) console.log(error); else console.log('Email sent: ' + info.response); })

            return res.json({ token })
        } catch (e) {
            next(Api_Error.bad_Request(e))
        }
    }


    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(Api_Error.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password) //сверка введёного пароль с действительным
        if (!comparePassword) {
            return next(Api_Error.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.roles)
        return res.json({ token })
    }

    //генерация нового токена и отправка на клиент (если пользователь постоянно использует свой акк, то токен будет перезаписываться)
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.roles)
        return res.json({ token })
    }

    async getAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async getOne(req, res) {
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        return res.json(user)
    }
}

module.exports = new User_Controller()