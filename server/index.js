require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require ('./routes/index')
const errorHandler = require ('./middleware/ErrorHandlingMiddleware')
const path = require ('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors()) //чтобы отправлять запросы с браузера
app.use(express.json()) //чтобы приложение парсило json формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
/*app.get('/', (req, res)  => { // 1 парам. (/) - url, 2 парам. (req, res)- ф-ю call back, кот. принимает парам. запрос (request) и ответ (response)
    res.status(200).json({message: 'WORKING!!!'})
})*/

app.use (errorHandler) //обработка ошибок, последний Middleware


const start = async () => {
    try {
        await sequelize.authenticate() //устан. подкл. к БД
        await sequelize.sync({ alter:true }) //сверяется состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()