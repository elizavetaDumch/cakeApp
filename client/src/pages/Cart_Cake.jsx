import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import CartItem from "../components/CartItem";
import { Container, Row, Card } from "react-bootstrap";
import OrderForm from "../components/OrderForm";

const Cart_Cake = observer(() => {
    const { cart } = useContext(Context);

    let sum = 0

    cart.products.map((product) => {
        sum += product.quantity * (product.cake.price + product.weight.price)

    })

    return (
        <Container className="my-4">
            <h2 className='mb-3' style={{ textAlign: "center", marginTop: "150px" }} >Корзина</h2>
            <Row>
                {cart.products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </Row>
            <Card border={"warning"} style={{ height:50, width: 350, marginTop: "50px"}}>
                <h5 style={{ textAlign: "center", marginTop: "10px" }}>Итоговая стоимость заказа: {sum} руб</h5>
            </Card>


            {Boolean(cart.products.length) && <OrderForm />}
            {!Boolean(cart.products.length) && <div className="text-center">Вы еще ничего не добавили в корзину</div>}
        </Container>
    );
});

export default Cart_Cake;
