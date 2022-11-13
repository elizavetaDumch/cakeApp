import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import OrderItem from "../components/OrderItem";
import { fetchOrders } from "../http/orderAPI"; 
import Spinner from "../components/Spinner";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders().then((data) => {
            setOrders(data);
            setLoading(false);
        });
    }, []);

    const orderList = (
        <>
            <h2 className="text-center">Заказы</h2>
            {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}
            {!Boolean(orders.length) && <h4>История заказов пуста</h4>}
        </>
    );

    return (
        <Container className="my-4">
            {loading ? <Spinner /> : orderList}
        </Container>
    );
};

export default Orders;
