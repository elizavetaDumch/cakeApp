import React from "react";
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {

    return (
        <Card border={"dark"} className="my-4 p-4">
            <div>Номер заказа: <Link to={`/orders/${order.id}`}>#{order.id}</Link></div>
            <div>Стоимость заказа: #{order.price} руб.</div>
        </Card>
    );
};

export default OrderItem;
