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
    const [value, setValue] = useState('')

    useEffect(() => {
        fetchTypes().then(data => cake.setTypes(data))       
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCake = () => {
        createCake({name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавить изделие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form> 
                    {/* <Form.Control 
                        value={value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder={"Введите название дизайна"} 
                    /> */}
                    <Dropdown>
                        <Dropdown.Toggle>{cake.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
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