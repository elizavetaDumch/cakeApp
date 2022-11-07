import React, { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { deleteProductFromCart } from "../http/cartAPI";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { Context } from "../index";

const OrderProductItem = ({ product }) => {
    return (
        <Col className="mt-5">
            <Card border={"dark"} style={{ width: 250 }}>
                <Image
                    width={248}
                    height={248}
                    src={process.env.REACT_APP_API_URL + product.cake.img}
                />
                <Card.Body>
                    <Card.Title>{product.cake.name}</Card.Title>
                    <Card.Text>{product.cake.description}</Card.Text>
                    <Card.Text>
                        Цена за декор: {product.cake.price} руб.
                    </Card.Text>
                    <Card.Text>
                        Вес: {product.weight.weight} ({product.weight.price} руб.)
                    </Card.Text>
                    <Card.Text>
                        Итоговая цена:
                        {product.cake.price + product.weight.price} руб.
                    </Card.Text>
                    <Card.Text>Кол-во: {product.quantity} шт. </Card.Text>
                    <Card.Text>
                        Сумма:
                        {product.quantity * (product.cake.price + product.weight.price)} руб.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default OrderProductItem;
