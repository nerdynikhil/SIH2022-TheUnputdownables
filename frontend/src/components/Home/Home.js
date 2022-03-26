import { UserOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import React from 'react'
import '../../styles/home.css'
import Nav from './Nav'
const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <div className="title">
        <h1>inMines</h1>
        <p>Centralized Minerals and Mines Management</p>
        <Button className='btn'>Get Started</Button>
      </div>
    </div>
  )
}

export default Home