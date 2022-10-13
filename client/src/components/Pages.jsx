import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const Pages = observer(() => {
    const { cake } = useContext(Context)
    const pageCount = Math.ceil(cake.totalCount / cake.limit) //общее кол-во тортов делим на кол-во на одной странице
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className='mt-3'>
            {pages.map(page =>
                <Pagination.Item
                    keн={page}
                    active={cake.page === page}
                    onClick={() => cake.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;