import { UserOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'
import React from 'react'
import '../../styles/home.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-card">
                <h1>Create Account</h1>
                <p>Already have an account?</p>
            </div>
            <div className='input-group'>
                <Input size="large" prefix={<UserOutlined />} placeholder={'Enter your Full Name'} />
                <Input size="large" prefix={<UserOutlined />} placeholder={'Enter your Email Id'} />
                <Input size="large" prefix={<UserOutlined />} placeholder={'Enter your Password'} />
            </div>
            <Button className="btn btn-register">Sign up</Button>
        </div>
    )
}

export default Login