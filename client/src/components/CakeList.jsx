import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import CakeItem from './CakeItem';

const CakeList = observer(() => {
    const { cake } = useContext(Context)
    return (
        <Row md={3} >
            {cake.cakes.map(cake =>
            <CakeItem key={cake.id} cake={cake}/>
                
            )}
        </Row>
    );
});

export default CakeList;