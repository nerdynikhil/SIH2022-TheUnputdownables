import { UserOutlined } from '@ant-design/icons'
import { Input, Button, Select } from 'antd'
import React from 'react'
import { Link } from "react-router-dom";

import '../../styles/home.css'
import Nav from './Nav'
const { Option } = Select;
const Login = () => {
    return (
        <div className='login'>
            <Nav />
            <div className="login-card">
                <div className='details'>
                    <h1>Login To Account</h1>
                    <p>Select the role to access details?</p>
                </div>
                <div className='input-group'>
                    <Input size="large" prefix={<UserOutlined />} placeholder={'Enter your Full Name'} />
                    <Input size="large" prefix={<UserOutlined />} placeholder={'Enter your Email Id'} />
                    <select

                        placeholder="Select a person"
                        optionFilterProp="children"
                    >
                        <option value="dog">Director of Geology</option>
                        <option value="dosam">Department Of Steel And Mines</option>
                    </select>
                </div>
                <Link to="/dashboard" >
                    <Button className="btn-register">Sign In</Button>
                </Link>
            </div>
        </div >
    )
}

export default Login