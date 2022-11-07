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
        <>
            <h2 className="text-center">Ваш заказ успешно сформирован</h2>
            <div className="my-4">
                <div>Номер заказа: #{order.id}</div>
                <div>Сумма заказа: {order.price} руб.</div>
                <div>Имя: {order.name}</div>
                <div>Телефон: {order.phone}</div>
            </div>
            <h4 className="text-center">Состав заказа</h4>
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
