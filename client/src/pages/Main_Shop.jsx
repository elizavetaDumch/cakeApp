import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MyCarousel from '../components/MyCarousel'
import { Context } from '..';
import CakeList from '../components/CakeList';
import Pages from '../components/Pages';

import TypeBar from '../components/TypeBar';
import { fetchCakes, fetchTypes } from '../http/cakeAPI';

const Main_Shop = observer(() => {
    const { cake } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => cake.setTypes(data))
        fetchCakes(null, 1, 6).then(data => {
            cake.setCakes(data.rows)
            cake.setTotalCount(data.count)
        })
    }, [cake])

    useEffect(() => {
        fetchCakes(cake.selectedType.id, cake.page, 6).then(data => {
            cake.setCakes(data.rows)
            cake.setTotalCount(data.count)
        })
    }, [cake.selectedType, cake.page, cake])

    return (
        <div>
            <MyCarousel />
            <Container>
                <TypeBar />
                <CakeList />
                <Pages />
            </Container>
        </div>
    );
});

export default Main_Shop;
