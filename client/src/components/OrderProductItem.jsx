import React, { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { deleteProductFromCart } from "../http/cartAPI";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { Context } from "../index";

const OrderProductItem = ({ product }) => {
    return (
        <Col className="mt-5">
            <Card border={"dark"} style={{ width: 250, height: 600 }}>
                <Image
                    width={248}
                    height={248}
                    src={process.env.REACT_APP_API_URL + product.cake.img}
                />
                <Card.Body>
                    <Card.Title><b>{product.cake.name}</b></Card.Title>
                    <Card.Text>{product.cake.description}</Card.Text>
                    <Card.Text>
                        Цена за декор: <b>{product.cake.price} руб</b>
                    </Card.Text>
                    <Card.Text>
                        Вес: <b>{product.weight.weight} </b> ({product.weight.price} руб)
                    </Card.Text>
                    <Card.Text>
                        Итоговая цена:  {" "}
                        <b>{product.cake.price + product.weight.price} руб</b>
                    </Card.Text>
                    <Card.Text>Кол-во: <b>{product.quantity} шт</b> </Card.Text>
                    <Card.Text>
                        Сумма: {" "}
                        <b>{product.quantity * (product.cake.price + product.weight.price)} руб</b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default OrderProductItem;
