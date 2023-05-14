import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button, Dropdown } from "react-bootstrap";
import { deleteProductFromCart } from "../http/cartAPI";
import { fetchDough, fetchFilling } from "../http/cakeAPI";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { Context } from "../index";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';


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

                    {/* <Dropdown>
                        <Dropdown.Toggle variant="outline-warning" className='mb-2' style={{color:"black", width: 225}}> Выберите начинку
                            <DropdownMenu>
                                <Dropdown.Item>
                                    Ягодный микс
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Шоколад
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Солёная карамель
                                </Dropdown.Item>
                            </DropdownMenu>
                        </Dropdown.Toggle>
                    </Dropdown> */}

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-warning" className='mb-2' style={{ color: "black", width: 225 }}> {"Выберите начинку"}
                            <DropdownMenu>
                                {/* {cake.fillings.map(filling =>
                                    <Dropdown.Item
                                        // onClick={() => product.setSelectedFilling(filling)}
                                        key={filling.id}
                                    >
                                        {filling.type}
                                    </Dropdown.Item>
                                )} */}

                                {filling.map(filling =>
                                    <Dropdown.Item
                                        // onClick={() => product.setSelectedFilling(filling)}
                                        key={filling.id}
                                    >
                                        {filling.type}
                                    </Dropdown.Item>
                                )}
                            </DropdownMenu>
                        </Dropdown.Toggle>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="outline-warning" className='mt-2 mb-2' style={{ color: "black", width: 225 }}> Выберите корж
                            <DropdownMenu>
                                {/* {cake.doughs.map(dough =>
                                    <Dropdown.Item
                                        // onClick={() => product.setSelectedFilling(filling)}
                                        key={dough.id}
                                    >
                                        {dough.type}
                                    </Dropdown.Item>
                                )} */}

                                {dough.map(dough =>
                                    <Dropdown.Item
                                        // onClick={() => product.setSelectedFilling(filling)}
                                        key={dough.id}
                                    >
                                        {dough.type}
                                    </Dropdown.Item>
                                )}
                            </DropdownMenu>
                        </Dropdown.Toggle>
                    </Dropdown>

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
