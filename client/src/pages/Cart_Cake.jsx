import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import CartItem from "../components/CartItem";
import { Container, Row } from "react-bootstrap";
import OrderForm from "../components/OrderForm";

const Cart_Cake = observer(() => {
    const { cart } = useContext(Context);

    return (
        <Container className="my-4">
            <h2 className="text-center">Корзина</h2>
            <Row>
                {cart.products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </Row>
            {Boolean(cart.products.length) && <OrderForm />}
            {!Boolean(cart.products.length) && <div className="text-center">Вы еще ничего не добавили в корзину</div>}
        </Container>
    );
});

export default Cart_Cake;
