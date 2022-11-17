import React from "react";
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";


const OrderItem = ({ order }) => {

    return (        
        <Card border={"dark"} className="my-5 p-4"> 
        {/* <h4 className="my-1 p-2">История заказов</h4>  */}         
            <h5>Номер заказа: <Link to={`/orders/${order.id}`}>№{order.id}</Link></h5>
            <div>Стоимость заказа: <b>{order.price} руб</b></div>
        </Card>
    );
};

export default OrderItem;
