import React, { useEffect, useState } from "react";
import {Container, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../http/orderAPI";
import Spinner from "../components/Spinner";
import CartItem from "../components/CartItem";
import OrderProductItem from "../components/OrderProductItem";

const Order = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrder(id).then((data) => {
            setOrder(data);
            setLoading(false);
        });
    }, []);

    const orderDetails = (
        <> <br></br>
        <Container className="d-flex flex-column rounded border bg-white"  style={{width:"400px", marginTop: "100px"}}>
            <h4 className="text-center">Ваш заказ успешно сформирован</h4>
            <div className="my-4">
                <div>Номер заказа: <b>№{order.id}</b></div>
                <div>Сумма заказа: <b>{order.price} руб</b></div>
                <div>Имя: <b>{order.name}</b></div>
                <div>Телефон: <b>{order.phone}</b></div>
            </div>
            </Container>
            <h4 className="text-center mt-5">Состав заказа:</h4>
            <Row className="mb-5">
                {order.order_products && order.order_products.map((product) => (
                    <OrderProductItem key={product.id} product={product} />
                ))}
            </Row>
        </>
    );

    return (
        <Container className="my-4">
            {loading ? <Spinner /> : orderDetails}
        </Container>
    );
};

export default Order;
