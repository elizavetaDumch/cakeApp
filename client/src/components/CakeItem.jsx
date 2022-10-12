import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import basket from '../assets/basket.png'
import Image from 'react-bootstrap/Image';


const CakeItem = ({ cake }) => {

    return (
        <Col className="mt-5" >
            
            <Card border={"dark"} style={{ width: 250, left:"20%" }}  >

                <Image width={248} height={248}  src={ process.env.REACT_APP_API_URL+ cake.img} />

                <Card.Body >
                    <Card.Title>{cake.name}</Card.Title>
                    <Card.Text>
                        {cake.description}                         
                    </Card.Text>
                    <Button variant="light" style={{ marginLeft:"150px" }}>
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