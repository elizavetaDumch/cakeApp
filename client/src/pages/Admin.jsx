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
        <Container className="d-flex flex-column rounded border bg-white"  style={{width:"350px", marginTop: "250px"}}>
            <h3 style={{ textAlign: "center", marginTop: "50px" }}><b>Админ панель</b></h3> 
            <Button 
                variant={"outline-warning"}
                className="mt-4 p-2"
                onClick={() => setCakeVisible(true)}
                style={{color:"black"}}
            >
                <b>Добавить изделие</b>
            </Button>
            <Button
                variant={"outline-warning"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
                style={{color:"black"}}
            >
                <b>Добавить тип изделия</b>
            </Button>
            {/* <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить начинку
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
            >
                Добавить корж
            </Button> */}
            <Button style={{color:"black", textAlign: "center", marginBottom: "70px" }}
                variant={"outline-warning"}                
                className="mt-4 p-2"
                onClick={() => setOrdersVisible(true)}
                
            >
                <b>Просмотреть заказы</b>
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