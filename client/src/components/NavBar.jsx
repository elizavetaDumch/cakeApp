import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { observer } from "mobx-react-lite"
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, MAIN_SHOP_ROUTE, LOGIN_ROUTE, CART_CAKE_ROUTE, ORDERS_ROUTE, ABOUT_ROUTE } from '../utils/consts';
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

    const checkAuthCart = () => {
        if (!user.isAuth) {
            history.push(LOGIN_ROUTE)
        } else {
            history.push(CART_CAKE_ROUTE)
        }
    }

    const checkAuthOrders = () => {
        if (!user.isAuth) {
            history.push(LOGIN_ROUTE)
        } else {
            history.push(ORDERS_ROUTE)
        }
    }

    return (
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand
                    src={logo}
                    onClick={() => history.push(MAIN_SHOP_ROUTE)}
                >
                    <Image width="55px" className='ms-2' src={logo} style={{ marginRight: "15px" }} />
                    {/*  <h5 className='ms-1'>CakeApp</h5> */}
                    <b>CakeApp</b>
                    {/* <label><b>CakeApp</b></label> */}
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <Button
                        variant={"outline-dark"}
                        onClick={() => history.push(ABOUT_ROUTE)}
                        className="mx-2"
                    >
                        <b>О нас</b>
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        onClick={() => checkAuthOrders()}
                    >
                       <b>История заказов</b> 
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        onClick={() => checkAuthCart()}
                        className="mx-2"
                    >
                      <b>Корзина</b>  <b style={{color: "orange"}}>({cart.quantity})</b>
                    </Button>
                </Nav>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        {decodeRoles.roles === "ADMIN" && (
                            <Button
                                variant={"warning"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                                
                            >
                                <b>Админ панель</b>
                            </Button>
                        )}

                        <Button
                            variant={"outline-dark"}
                            className="ms-2"
                            onClick={() => logOut()}
                        >
                            <b>Выйти</b>
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-dark"}
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >
                            <b>Авторизация</b>
                        </Button>

                    </Nav>

                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
