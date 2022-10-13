import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import basket from '../assets/basket.png'
import Image from 'react-bootstrap/Image';
import { fetchWeights } from '../http/cakeAPI';


const CakeItem = ({ cake }) => {
    const [weight, setWeight] = useState([])
    const [result, setResult] = useState(0)

    useEffect(() => {
        fetchWeights(cake.typeCakeId).then(data => setWeight(data))
    }, [cake.typeCakeId])

    useEffect(() => {
        if (weight[0] !== undefined)
            setResult(weight[0].price + cake.price)
    }, [weight, cake.price])

    const clickWeightPrice = (index) => {
        setResult(weight[index].price + cake.price)
    }


    return (
        <Col className="mt-5" >

            <Card border={"dark"} style={{ width: 250, left: "20%" }}  >

                <Image width={248} height={248} src={process.env.REACT_APP_API_URL + cake.img} />

                <Card.Body >
                    <Card.Title>{cake.name}</Card.Title>
                    <Card.Text>{cake.description}</Card.Text>

                    <Card.Text>Цена за декор: {cake.price} руб.</Card.Text>

                    {weight.map((weight, i) =>
                        (weight, i) ?
                            <button key={i} onClick={() => clickWeightPrice(1)}>Вес: {weight.weight} Цена: {weight.price} руб.</button>
                            :
                            <button key={i}  onClick={() => clickWeightPrice(0)}>Вес: {weight.weight} Цена: {weight.price} руб.</button>
                    )}

                    <Card.Text>Итоговая цена: {result} руб. </Card.Text>

                    <Button variant="light" style={{ marginLeft: "150px" }}>
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