import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpg"

const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);


    return (
        <>
            <Navbar style={{ height: "60px", background: "rgb(246 247 251 / 81%)", color: "black", position: "fixed", width: "100%", zIndex: "10"}}>
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2 d-flex">
                    <img src={logo} alt="" className='logo'/>
                    <h3 className='text-black h3ma'>ShoeEnchant</h3>
                </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge text-black' data-count={carts.length}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Headers