import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import {createCake, fetchTypes, fetchCakes} from "../../http/cakeAPI"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { observer } from 'mobx-react-lite';

const CreateCake = observer(({ show, onHide }) => {

    const {cake} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => cake.setTypes(data))       
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCake = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('price', price)
        formData.append('typeCakeId', cake.selectedType.id)
        createCake(formData).then(data => onHide())
    }

    console.log(cake.selectedType.id)

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить изделие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form> 
                    <Dropdown>
                        <Dropdown.Toggle variant="warning">{cake.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <DropdownMenu>  {/* <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item> */} 
                            {cake.types.map( type =>                                 
                                <Dropdown.Item 
                                    onClick={() => cake.setSelectedType(type)}
                                    key={type.id}                                    
                                >
                                    {type.name}
                                </Dropdown.Item> 
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    <Form.Control 
                        className='mt-3'
                        value={name}
                        onChange = {e => setName(e.target.value)}
                        placeholder={"Введите название дизайна"} 
                    /> 

                    <Form.Control 
                        className='mt-3'
                        value={description}
                        onChange = {e => setDescription(e.target.value)}
                        placeholder={"Введите описание"} 
                    /> 

                    <Form.Control 
                        className='mt-3'
                        value={price}
                        onChange = {e => setPrice(Number(e.target.value))}
                        placeholder={"Введите стоимость дизайна"} 
                    /> 

                    <Form.Control 
                        className='mt-3'
                        type="file"
                        onChange={selectFile}
                    /> 

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCake}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCake;