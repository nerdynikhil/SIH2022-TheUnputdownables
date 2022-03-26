import React from 'react'
import { Table } from 'antd'
import Nav from '../Home/Nav';
const Dashboard = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div className='home'>
            <Nav />
            <h1>
                Dashboard
            </h1>
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}

export default Dashboard