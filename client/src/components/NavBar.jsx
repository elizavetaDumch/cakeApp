import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { observer } from "mobx-react-lite"
import { useHistory } from 'react-router-dom';
import {ADMIN_ROUTE, MAIN_SHOP_ROUTE, LOGIN_ROUTE, CART_CAKE_ROUTE, ORDERS_ROUTE} from '../utils/consts';
import logo from '../assets/logo.png'
import Image from 'react-bootstrap/Image';
import jwtDecode from 'jwt-decode';

const NavBar = observer(() => {

    const { user, cart } = useContext(Context)

    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        window.location.reload()
    }

    let decodeRoles
    if (localStorage.token) {
        decodeRoles = jwtDecode(localStorage.token)
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand
                    src={logo}
                    onClick={() => history.push(MAIN_SHOP_ROUTE)}
                >
                    <Image width="100px" src={logo} />
                    CakeApp
                </Navbar.Brand>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        {decodeRoles.roles === "ADMIN" && (
                            <Button
                                variant={"outline-dark"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                        )}

                        <Button
                            variant={"outline-dark"}
                            className="ms-2"
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                )}
                <Nav className="ml-auto">
                    <Button
                        variant={"outline-dark"}
                        onClick={() => history.push(CART_CAKE_ROUTE)}
                        className="mx-2"
                    >
                        Корзина ({cart.quantity})
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        onClick={() => history.push(ORDERS_ROUTE)}
                    >
                        История заказов
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;
