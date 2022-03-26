import React from 'react'
import Nav from '../Home/Nav'
import DashboardTable from './DashboardTable'
import ImageUpload from './ImageUpload';

const Dashboard = ({ role }) => {
    let component;
    if (role === 'dosam') {
        component = <DashboardTable />
    } else {
        component = <ImageUpload />
    }
    return (
        <div className='home dashboard'>
            <Nav />
            <h2>
                Dashboard
            </h2>
            <div>
                {component}
            </div>
        </div>
    )
}

export default Dashboard