import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import useAuth from '../../../hooks/useAuth';

const usersIcon = <AiOutlineUser />

const Header = () => {
    const { user, logOut, admin } = useAuth();

    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Navbar collapseOnSelect expand="lg" fixed='top'
            className={colorChange ? 'navbar1 colorChange' : 'navbar1'}
        >
            <Container>
                <Navbar.Brand href="/home" className='nav-logo text-white'>Tech<span className='main-font-color'>Bro</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto" defaultActiveKey="/home">
                        <NavLink to="/home" className="text-decoration-none mx-3 fs-5  menu-items">Home</NavLink>
                        <NavLink to="/about" className="text-decoration-none mx-3 fs-5  menu-items">About</NavLink>
                        <NavLink to="/products" className="text-decoration-none mx-3 fs-5  menu-items">Products</NavLink>
                        <NavLink to="/contact" className="text-decoration-none mx-3 fs-5  menu-items">Contact Us</NavLink>

                        {
                            admin &&

                            <NavLink to="/dashboard" className="text-decoration-none mx-3 fs-5  menu-items">Admin Panel</NavLink>
                        }

                    </Nav>


                    <NavDropdown title={usersIcon} className=' user-btn ms-auto rounded-circle' variant="none " >
                        {
                            user?.email ?
                                <NavDropdown.Item className="main-font-color dropdown-menu-items bg-none fw-bolder"><AiOutlineUser /> {user.displayName}</NavDropdown.Item>

                                :
                                <NavDropdown.Item as={NavLink} to="/login" className="main-font-color chngbg dropdown-menu-items">Login</NavDropdown.Item>
                        }

                        {
                            user?.email ?
                                <NavDropdown.Item as={NavLink} to="/home" onClick={logOut} className="main-font-color chngbg dropdown-menu-items"><FiLogOut /> Logout</NavDropdown.Item>

                                :
                                <NavDropdown.Item as={NavLink} to="/register" className="main-font-color chngbg dropdown-menu-items">Register</NavDropdown.Item>
                        }

                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;