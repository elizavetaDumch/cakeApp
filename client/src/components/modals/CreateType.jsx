import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { Context } from "../../index";
import { createType, createWeight, fetchTypes, fetchWeights } from "../../http/cakeAPI"
import { observer } from "mobx-react-lite";
import FormRange from 'react-bootstrap/esm/FormRange';

const CreateType = observer(({ show, onHide }) => {
    const { cake } = useContext(Context)

    const [name, setName] = useState('')

    const [weight1, setWeight1] = useState('')
    const [price1, setPrice1] = useState()
    const [weight2, setWeight2] = useState('')
    const [price2, setPrice2] = useState()

    const addType = async () => {
        await createType({ name: name }).then(data => {
            setName('')
            onHide()
        })

        await fetchTypes().then(data => cake.setTypes(data))
        let typeId = cake.types.pop()

        await createWeight(weight1, price1, typeId.id)
        await createWeight(weight2, price2, typeId.id)
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
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название типа"}
                    />

                    <Row className="mt-4" >
                        <Col md={3}>
                            <Form.Control
                                value={weight1}
                                onChange={(e) => setWeight1(e.target.value)}
                                placeholder='Введите вес 1'
                            />
                        </Col>

                        <Col md={6}>
                            <Form.Control
                                value={price1}
                                onChange={(e) => setPrice1(e.target.value)}
                                placeholder='Введите стоимость для данного веса 1'
                            />
                        </Col>
                    </Row>

                    <Row className="mt-4" >
                        <Col md={3}>
                            <Form.Control
                                value={weight2}
                                onChange={(e) => setWeight2(e.target.value)}
                                placeholder='Введите вес 2'
                            />
                        </Col>

                        <Col md={6}>
                            <Form.Control
                                value={price2}
                                onChange={(e) => setPrice2(e.target.value)}
                                placeholder='Введите стоимость для данного веса 2'
                            />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateType;