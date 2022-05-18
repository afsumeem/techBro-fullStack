import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/aboutUs.jpg';
import './AboutUs.css';


const AboutUs = () => {
    return (
        // about us section

        <div className='mt-5 bg-white' >
            <Row className='m-0'>
                <Col md={6} className='d-flex flex-column justify-content-center' style={{ "backgroundColor": "#aecdf6" }}>
                    <Container>
                        <h5 className='banner-title'>BEST IN-COUNTRY</h5>

                        <h2 className='my-4'>Bring your home to lively <span style={{ "color": "#04AEC4" }}>Colors!</span></h2>
                        <h6 className='my-4'>We bring your home to your dream Colors. We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors!We bring your home to your dream Colors. We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors!We bring your home to your dream Colors. We bring your home to your dream Colors!We bring your home to your dream Colors! We bring your home to your dream Colors!</h6>
                        <NavLink to='/products' className="text-decoration-none">
                            <Button variant='none' style={{ 'border': '2px solid #04AEC4' }} className='w-50 py-1 mt-4 banner-btn fw-bold fs-5'>Our Products</Button>
                        </NavLink>
                    </Container>
                </Col>
                <Col md={6}>
                    <img src={banner} className=' img-fluid mx-auto d-block' alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default AboutUs;