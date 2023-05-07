import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import instruction from '../../assets/instruction.png'


const Instruction = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    Инструкция
                </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* <Form.Control> */}

                    <img src={instruction} class="img-fluid" alt="Image" />
                    {/* </Form.Control> */}
                </Form>
            </Modal.Body>

        </Modal>
    );
};

export default Instruction;