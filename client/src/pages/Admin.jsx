import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <h3>Админ панель</h3>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить изделие
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить тип изделия
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить начинку
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2">
                Добавить корж
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2"> 
                Просмотреть заказы
            </Button>
            <CreateType show={false}/>
        </Container>
    );
};

export default Admin;