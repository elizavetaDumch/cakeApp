import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CartItem from "../components/CartItem";
import {Row} from "react-bootstrap";

const Cart_Cake = observer(() => {

    const { cart } = useContext(Context)

    return (
        <div>
            Карт кейк
            <Row md={3} >
                {cart.products.map(product =>
                    <CartItem key={product.id} product={product} />)}
            </Row>
        </div>
    );
});

export default Cart_Cake;
