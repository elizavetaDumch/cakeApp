import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const { cake } = useContext(Context)
    const allCakes = () => {
        cake.setSelectedType(cake)
    }

    return (
        <Container className='p-3 d-flex'>
            <div className='p-3 div-style'>
                <Card 
                className='p-3 me-2'
                style={{ cursor: 'pointer' }}
                border={!cake.selectedType.id ? 'warning' : 'light'}
                onClick={allCakes}
                >
                    Все 
                </Card>
                {cake.types.map(type =>
                    <Card
                        style={{ cursor: 'pointer' }}
                        key={type.id}
                        className="p-3 me-2"
                        onClick={() => cake.setSelectedType(type)}
                        border={type.id === cake.selectedType.id ? 'warning' : 'light'}
                    >
                        {type.name}
                    </Card>
                )}
            </div>
        </Container>
    );
});

export default TypeBar;