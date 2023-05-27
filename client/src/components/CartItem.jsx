import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button, Dropdown } from "react-bootstrap";
import { deleteProductFromCart, updateCartProduct } from "../http/cartAPI";
import { fetchDough, fetchFilling } from "../http/cakeAPI";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { Context } from "../index";
import Form from 'react-bootstrap/esm/Form';


const CartItem = ({ product }) => {
    const { cart } = useContext(Context);
    const { cake } = useContext(Context);

    const [filling, setFilling] = useState([])
    const [dough, setDough] = useState([])

    useEffect(() => {
        fetchFilling().then(data => setFilling(data))
    }, [])

    useEffect(() => {
        fetchDough().then(data => setDough(data))
    }, [])

    const removeFromCart = async (cartProductId) => {
        const data = await deleteProductFromCart(cartProductId);
        cart.products = data.cart_products;
        toast("Товар удален из корзины");
    };

    const updateCartItem = async (params) => {
        const data = await updateCartProduct(product.id, params);
        cart.products = data.cart_products;
        toast("Товар успешно изменен");
    };

    return (
        <Col className="mt-5">
            <Card border={"dark"} style={{ width: 300, height: 800 }}>
                <Image
                    width={298}
                    height={298}
                    src={process.env.REACT_APP_API_URL + product.cake.img}
                />
                <Card.Body>
                    <Card.Title><b>{product.cake.name}</b></Card.Title>
                    <Card.Text>{product.cake.description}</Card.Text>
                    <Card.Text >
                        Цена за декор: <b>{product.cake.price} руб</b>
                    </Card.Text>
                    <Card.Text>
                        Вес: <b>{product.weight.weight}</b> ({product.weight.price} руб.)
                    </Card.Text>
                    <Card.Text>
                        Итоговая цена:
                        <b> {product.cake.price + product.weight.price} руб</b>
                    </Card.Text>
                    <Card.Text>Кол-во: <b>{product.quantity} шт </b></Card.Text>
                    <Card.Text>
                        Сумма:
                        <b> {product.quantity * (product.cake.price + product.weight.price)} руб</b>
                    </Card.Text>

                    <Form.Select
                        value={product.fillingId}
                        onChange={(event) => updateCartItem({ fillingId: event.currentTarget.value })}
                    >
                        <option disabled>Выберите начинку</option>
                        {
                            filling.map(filling =>
                                <option value={filling.id}>{filling.type}</option>
                            )
                        }
                    </Form.Select>

                    <Form.Select
                        className='mt-3'
                        value={product.doughId}
                        onChange={(event) => updateCartItem({ doughId: event.currentTarget.value })}
                    >
                        <option disabled>Выберите корж</option>
                        {
                            dough.map(dough =>
                                <option value={dough.id}>{dough.type}</option>
                            )
                        }
                    </Form.Select>

                    <Button
                        className='mt-3'
                        variant="danger"
                        onClick={() => removeFromCart(product.id)}
                    >
                        Удалить
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CartItem;
