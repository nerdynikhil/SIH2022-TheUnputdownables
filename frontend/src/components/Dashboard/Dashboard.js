import React from 'react'
import { Table } from 'antd'
import Nav from '../Home/Nav';
import 'antd/dist/antd.css'

const Dashboard = () => {
    const dataSource = [
        {
            key: 1,
            vehicleNo: "XYZ",
            mineralName: "XYZ",
            weight: "XYZ",
            lesseeName: "XYZ",
            destination: "XYZ",
            tpNo: "XYZ",
            departureTime: "XYZ",
            transporter: "XYZ"
        },
        {
            key: 2,
            vehicleNo: "XYZ",
            mineralName: "XYZ",
            weight: "XYZ",
            lesseeName: "XYZ",
            destination: "XYZ",
            tpNo: "XYZ",
            departureTime: "XYZ",
            transporter: "XYZ"
        },
        {
            key: 3,
            vehicleNo: "XYZ",
            mineralName: "XYZ",
            weight: "XYZ",
            lesseeName: "XYZ",
            destination: "XYZ",
            tpNo: "XYZ",
            departureTime: "XYZ",
            transporter: "XYZ"
        },
        {
            key: 4,
            vehicleNo: "XYZ",
            mineralName: "XYZ",
            weight: "XYZ",
            lesseeName: "XYZ",
            destination: "XYZ",
            tpNo: "XYZ",
            departureTime: "XYZ",
            transporter: "XYZ"
        },
        {
            key: 5,
            vehicleNo: "XYZ",
            mineralName: "XYZ",
            weight: "XYZ",
            lesseeName: "XYZ",
            destination: "XYZ",
            tpNo: "XYZ",
            departureTime: "XYZ",
            transporter: "XYZ"
        },
    ];


    const columns = [
        {
            title: 'Vehicle No',
            dataIndex: 'vehicleNo',
            key: 'vehicleNo',
        },
        {
            title: 'Mineral Name',
            dataIndex: 'mineralName',
            key: 'mineralName',
        },
        {
            title: 'Weight',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Lessee Name',
            dataIndex: 'lesseeName',
            key: 'lesseeName',
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: 'Licensee Name',
            dataIndex: 'licenseeName',
            key: 'licenseeName',
        },
        {
            title: 'TP No.',
            dataIndex: 'tpNo',
            key: 'tpNo',
        },
        {
            title: 'Departure Time',
            dataIndex: 'departureTime',
            key: 'departureTime',
        },
        {
            title: 'Transporter',
            dataIndex: 'transporter',
            key: 'transporter',
        },
    ];
    return (
        <div className='home dashboard'>
            <Nav />
            <h1>
                Dashboard
            </h1>
            <div className='table'>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}

export default Dashboard