import React, { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import OrderItem from "../OrderItem";
import { fetchAllOrders } from "../../http/orderAPI";
import Spinner from "../Spinner";

const Orders = ({ show, onHide }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllOrders().then((data) => {
            setOrders(data);
            setLoading(false);
        });
    }, []);

    const orderList = (
        <>
            {/* <h2 className="text-center">Заказы</h2> */}
            {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}
            {!Boolean(orders.length) && <h4>История заказов пуста</h4>}
        </>
    );


    {/* <Modal>
            <Container className="my-4">
                {loading ? <Spinner /> : orderList}
            </Container>
        </Modal> */}


    return (
        /*  <Container className="my-4">
             {loading ? <Spinner /> : orderList}
         </Container> */

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Заказы пользователей
                </Modal.Title>
            </Modal.Header>

            <Container className="my-4">
                {loading ? <Spinner /> : orderList}
            </Container>
        </Modal>
    );
};

export default Orders;