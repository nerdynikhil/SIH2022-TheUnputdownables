import { UserOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home.css'
const Home = () => {
  return (
    <div className='home'>
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
      <div className="title">
        <h1>inMines</h1>
        <p>Centralized Minerals and Mines Management</p>
        <Button className='btn'>Get Started</Button>
      </div>
    </div>
  )
}

export default Home