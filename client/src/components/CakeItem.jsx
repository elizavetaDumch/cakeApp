import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import basket from "../assets/basket.png";
import Image from "react-bootstrap/Image";
import { fetchWeights } from "../http/cakeAPI";
import { addProductToCart } from "../http/cartAPI";
import { toast } from "react-toastify";
import { Context } from "../index";
import { useHistory } from 'react-router-dom';
import {LOGIN_ROUTE} from '../utils/consts';

const CakeItem = ({ cake }) => { 
    const { user, cart } = useContext(Context)   

    const history = useHistory()

    const [weight, setWeight] = useState([]);
    const [result, setResult] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState({});

    useEffect(() => {
        fetchWeights(cake.typeCakeId).then((data) => setWeight(data));
    }, [cake.typeCakeId]);

    useEffect(() => {
        if (weight[0] !== undefined) {
            setResult(weight[0].price + cake.price);
            setSelectedWeight(weight[0]);
        }
    }, [weight, cake.price]);

    const clickWeightPrice = (index) => {
        setResult(weight[index].price + cake.price);
        setSelectedWeight(weight[index]);
    };

    const clickAddToCart = async () => {
        /**
         * @typedef {Object} CartProduct
         */
        const cartProduct = {
            productId: cake.id,
            weightId: selectedWeight.id,
            fillingId: null, // TODO - set the CartProduct filling
            doughId: null, // TODO - set the CartProduct dough
        };
        if (!user.isAuth){
            history.push(LOGIN_ROUTE) 
        }
        const data = await addProductToCart(cartProduct);
        cart.products = data.cart_products;
        toast("Товар добавлен в корзину");
        
    };

    console.log()

    return (
        <Col className="mt-5">
            <Card border={"dark"}  style={{ width: 300, left: "20%", height: 750, position: "relative"}}>
                <Image
                    width={298}
                    height={298}
                    src={process.env.REACT_APP_API_URL + cake.img}
                />

                <Card.Body>
                    <Card.Title><b>{cake.name}</b></Card.Title>
                    <Card.Text>{cake.description}</Card.Text>

                    <Card.Text className="ms-1">Декор: <b>{cake.price}</b> руб.</Card.Text>

                    {/* додумать потом. Активная кнопка - красная */}
                    {weight.map(
                        (weights, i) =>
                            (weights, i) ? (
                                <Card
                                    style={{ cursor: "pointer" }}
                                    key={i}
                                    className="p-3 me-2"
                                    onClick={() => clickWeightPrice(1)}
                                    border={weight[1].id === selectedWeight.id ? "danger" : "light"}
                                >
                                    <Card.Text>
                                        Вес: <b>{weights.weight}</b>{" "}
                                        Цена: <b>{weights.price} </b> 
                                    </Card.Text>

                                </Card>
                            ) : (
                                <Card
                                    style={{ cursor: "pointer" }}
                                    key={i}
                                    className="p-3 me-2"
                                    onClick={() => clickWeightPrice(0)}
                                    border={weight[0].id === selectedWeight.id ? "danger" : "light"}
                                >
                                    <Card.Text >
                                        Вес: <b>{weights.weight}</b>{" "}
                                        Цена: <b>{weights.price}</b> руб.
                                    </Card.Text>

                                </Card>
                            )

                        // <button key={i}  onClick={() => clickWeightPrice(1)}>Вес: {weight.weight} Цена: {weight.price} руб.</button>
                        // <button key={i}  onClick={() => clickWeightPrice(0)}>Вес: {weight.weight} Цена: {weight.price} руб.</button>
                    )}

                    <Card.Text className="p-3 ms-4">Итог: <b>{result} руб.</b>  </Card.Text>

                    <Button                        
                        variant={"outline-warning"}
                        style={{ marginLeft: "180px", marginBottom: "5", position: "absolute", bottom: 30 }}                        
                        onClick={() => clickAddToCart()}
                    >
                        <Image src={basket} width={50} height={50} />
                        
                    </Button>
                </Card.Body>

                {/* <div className='d-flex justify-content-between align=items=center'>
                    <div>Tort 1</div>
                    <div className='d-flex'>
                        <Image src={basket} width={50} height={50} />
                    </div>
                </div> */}
            </Card>
        </Col>
    );
};

export default CakeItem;
