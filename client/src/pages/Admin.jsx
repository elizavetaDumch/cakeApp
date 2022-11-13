import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateCake from '../components/modals/CreateCake';
import CreateFilling from '../components/modals/CreateFilling';
import CreateDough from '../components/modals/CreateDough';
import Orders from '../components/modals/Orders';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [cakeVisible, setCakeVisible] = useState(false)
    const [ordersVisible, setOrdersVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <h3 className="mt-4 p-2">Админ панель</h3>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCakeVisible(true)}
            >
                Добавить изделие
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип изделия
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить начинку
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Добавить корж
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setOrdersVisible(true)}
            >
                Просмотреть заказы
            </Button>
            <CreateCake show={cakeVisible} onHide={() => setCakeVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <Orders show={ordersVisible} onHide={() => setOrdersVisible(false)} />
            {/*  <CreateFilling show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDough show={typeVisible} onHide={() => setTypeVisible(false)}/> */}
        </Container>
    );
};

export default Admin;