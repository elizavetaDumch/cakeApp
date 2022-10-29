import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const CartItem = ({ product }) => {

    const removeFromCart = () => {
        //TODO - implement remove a product from the cart
    }

    return (
        <Col className="mt-5" >
            <Card
                border={ "dark" }
                style={{ width: 250, left: "20%" }}>
                <Image
                    width={ 248 }
                    height={ 248 }
                    src={ process.env.REACT_APP_API_URL + product.img } />
                <Card.Body >
                    <Card.Title>{ product.name }</Card.Title>
                    <Card.Text>{ product.description }</Card.Text>
                    <Card.Text>Цена: { product.price } руб. </Card.Text>
                    <Card.Text>Кол-во: { product.quantity } шт. </Card.Text>
                    <Card.Text>Сумма: { product.quantity * product.price } руб.</Card.Text>
                    <Button
                        variant="danger"
                        style={{ marginLeft: "150px" }}
                        onClick={ () => removeFromCart() }>
                        Удалить
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CartItem;
