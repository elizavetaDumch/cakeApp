import React, {useContext, useEffect, useState} from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import {Context} from "../../index";
import {createType, fetchTypes} from "../../http/cakeAPI"
import {observer} from "mobx-react-lite";
import FormRange from 'react-bootstrap/esm/FormRange';

const CreateType = ({ show, onHide }) => {

    const [name, setName] = useState('')
    const [weight1, setWeight1] = useState([])
    const [weight2, setWeight2] = useState([])

    const addWeight1 = () => {
        setWeight1([...weight1, {weight: '', price: '', number: Date.now()}])
    }

    /* const addWeight2 = () => {
        setWeight2([weight2, {weight: '', price: ''}])
    } */ 

    const changeWeight1 = (key, value, number) => {
        setWeight1(weight1.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addType = () => {
        const formData = new FormData()
        formData.append('name', name)        
        formData.append('weight', JSON.stringify(weight1))
        createType(formData).then(data => onHide())
        
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered            
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип изделия
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form> {/* помимо названия нужно веса указать и стоимости для весов */}
                    <Form.Control 
                        value={name}
                        onChange = {e => setName(e.target.value)}
                        placeholder={"Введите название типа"} 
                    />
                   
                    {/* <label className="mt-4">
                        Добавьте категории весов для данного типа:
                    </label>    */}               

                    <Button
                        className="mt-4"
                        variant={"outline-dark"}
                        onClick={addWeight1}
                    >
                        Добавить категорию веса для данного типа:
                    </Button>  

                    {/* я не знаю, почему дважды выводится */}
                    {weight1.map(i =>
                            <Row className="mt-4" key={i.number}>
                                <Col md={3}>
                                    <Form.Control
                                        value={i.weight}
                                        onChange={(e) => changeWeight1('weight', e.target.value, i.number)}
                                        placeholder='Введите вес'
                                    />
                                </Col>

                                <Col md={5}>
                                    <Form.Control
                                        value={i.price}
                                        onChange={(e) => changeWeight1('price', e.target.value, i.number)}
                                        placeholder='Введите стоимость для данного веса'
                                    />                                    
                                </Col>
                            </Row>
                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;