import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.jpg';
import banner3 from '../../../images/banner-3.jpg';
import banner4 from '../../../images/banner-4.jpg';
import banner5 from '../../../images/banner-5.jpg';
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <div className='banner'>

            <Carousel fade controls={false}
                style={{ "marginTop": "-100px" }}
            >

                <Carousel.Item >
                    <img
                        className="d-block w-100 banner-img opacity-25"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-content'>
                        <h1><span className='main-font-color'>Technology</span> is best when it brings <br /> people together</h1>
                        <p>Technology like art is a soaring exercise of the human imagination</p>
                        <Button as={Link} to="/feedback" variant="none" className='w-25 py-2 explore-button'>Share Your Experience</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Connect and<span className='main-font-color'> Build</span> a<br />New World</h1>
                        <p>Innovation is the outcome of a habit, not a random act</p>
                        <Button as={Link} to="/feedback" variant="none" className='w-25 py-2 explore-button'>Share Your Experience</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Awesome IT Services For Your<br />With <span className='main-font-color'>Business</span></h1>
                        <p>It’s not that we use technology, we live technology.</p>
                        <Button as={Link} to="/feedback" variant="none" className='w-25 py-2 explore-button'>Share Your Experience</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Working with top-tier <br /><span className='main-font-color'>Developers</span></h1>
                        <p> The real problem is not whether machines think but whether men do.</p>
                        <Button as={Link} to="/feedback" variant="none" className='w-25 py-2 explore-button'>Share Your Experience</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Groundbreaking Ideas For The <br /> <span className='main-font-color'>IT Field</span></h1>
                        <p>The real problem is not whether machines think but whether men do.</p>
                        <Button as={Link} to="/feedback" variant="none" className='w-25 py-2 explore-button'>Share Your Experience</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;