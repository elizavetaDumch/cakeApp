import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Context } from '..'
import { login, registration } from '../http/userAPI'
import { observer } from "mobx-react-lite"
import { MAIN_SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'


const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('') //хуки (ф-ии) для отслеживания состояния компонентов
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(MAIN_SHOP_ROUTE)
            window.location.reload()           
        } catch (e) {
            alert(e.response.data.message)
        }



    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            {/* style={{height: window.innerHeight = 54}}*/}


            <form className="auth-wrapper">
                <div className='auth-inner'>
                    <h3> {isLogin ? 'Авторизация' : "Регистрация"}</h3>


                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Введите email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Введите password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid ">
                        <Button  variant="warning"
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                    {isLogin ?
                        <p className="forgot-password text-right"> {/* !!! ПОменять названия классов*/}
                            Не зарегистрированы? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </p>
                        :
                        <p className="forgot-password text-right"> {/* !!! ПОменять названия классов*/}
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </p>
                    }

                </div>
            </form>
        </Container>

    )

})

export default Auth;