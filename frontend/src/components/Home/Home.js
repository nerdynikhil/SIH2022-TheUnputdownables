import { UserOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import '../../styles/home.css'
import Nav from './Nav'
const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <div className='main'>
        <div className="title">
          <h1>inMines</h1>
          <p>Centralized Minerals and Mines Management</p>
          <Link to="/login">
            <Button className='btn'>Get Started</Button>
          </Link>
        </div>
        <div className='logo'>
          <img src="/image/logo.svg" alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Home