import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, []);


    return (
        <>
            <Header />
            <div style={{ padding: "130px", backgroundColor: "#7b83f8" }}>
                <h2 className="pt-5 pb-3">Discover the Tech Innovations</h2>
            </div>
            <Container>


                <Row xs={1} md={3} sm={2} className="g-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Products;