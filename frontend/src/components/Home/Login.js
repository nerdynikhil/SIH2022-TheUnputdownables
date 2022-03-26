import { MailOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Button, Select } from 'antd'
import React, { useState } from 'react'
import { Link } from "react-router-dom";

import '../../styles/home.css'
import Dashboard from '../Dashboard/Dashboard';
import Nav from './Nav'
const { Option } = Select;
const Login = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [role, setRole] = useState("");
    return (
        <>
            {
                isClicked ? <Dashboard role={role} />
                    :
                    <div className='login'>
                        <Nav />
                        <div className="login-card">
                            <div className='details'>
                                <h1>Login To Account</h1>
                                <p>Select the role to access details?</p>
                            </div>
                            <div className='input-group'>
                                <Input className='input' size="large" prefix={<UserOutlined />} placeholder={'Enter your Full Name'} />
                                <Input className='input' size="large" prefix={<MailOutlined />} placeholder={'Enter your Email Id'} />
                                <Select
                                    onChange={(value) => { setRole(value) }}
                                    placeholder='Select Role'
                                    className='select'
                                    optionFilterProp="children"
                                >
                                    <option value="dog">Director of Geology</option>
                                    <option value="dosam">Department Of Steel And Mines</option>
                                </Select>
                            </div>
                            <Button className="btn-register" onClick={() => setIsClicked(!isClicked)}>Sign In</Button>
                        </div>
                    </div >}
        </>
    )
}

export default Login