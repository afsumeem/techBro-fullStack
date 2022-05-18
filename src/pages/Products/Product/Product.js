import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, desc, picture, _id } = product;

    const imgStyle = {
        height: '220px'
    };

    return (
        <div className="mt-5">

            <Col>
                <Card className=" m-3">
                    <Card.Img className="w-100" variant="top" src={picture} style={imgStyle} />
                    <Card.Body className="p-2">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-start">
                            {desc.slice(0, 150)}
                        </Card.Text >
                    </Card.Body>
                    <Card.Footer>
                        <NavLink to={`/products/${_id}`} className="text-decoration-none fs-5">
                            View Details
                        </NavLink>
                    </Card.Footer>

                </Card>
            </Col>


        </div>
    );
};

export default Product;