import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <img src="/image/logo.svg" alt='inmines' />
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav