import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <h2>Logo</h2>
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