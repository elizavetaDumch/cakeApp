import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { observer } from "mobx-react-lite"
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, MAIN_SHOP_ROUTE, LOGIN_ROUTE, CART_CAKE_ROUTE, ORDERS_ROUTE, ABOUT_ROUTE } from '../utils/consts';
import logo from '../assets/logo.png'
import rating from '../assets/rating.png'
import instagram from '../assets/instagram.png'
import camera from '../assets/camera.png'
import Image from 'react-bootstrap/Image'
import jwtDecode from 'jwt-decode';

export const Footer = () => {
    // fixed="bottom" 
    return (



        // _____________________________

        // <footer>
        //     <div style={{ background: "#ffc105" }}>
        //         <Container >
        //             <Image width="55px" className='ms-2' src={logo} style={{ marginRight: "15px" }} />
        //             <b>CakeApp</b>
        //             <div className='footerRating' ><b>Рейтинг:</b></div>
        //         </Container>
        //     </div>

        // </footer>

        <footer class="footer-distributed">

            <Navbar className='navbar-light-footer'>
                <Container>
                    <Navbar.Brand
                        src={logo}>
                        <Image width="55px" className='ms-2' src={logo} style={{ marginRight: "15px" }} />
                        {/*  <h5 className='ms-1'>CakeApp</h5> */}
                        <b>CakeApp</b>
                        {/* <label><b>CakeApp</b></label> */}
                    </Navbar.Brand>

                    <b>Рейтинг:</b>
                    <Nav >

                        <Image width="70px" src={rating} style={{ marginRight: "600px" }} />
                    </Nav>


                    <Nav className="ml-auto">
                        <label> © 2023 Copyright: CakeApp.com</label>
                    </Nav>

                    <Image width="55px" className='ms-2' src={camera} style={{ marginRight: "15px" }} />

                </Container>
            </Navbar>

        </footer>
    );
};
export default Footer;