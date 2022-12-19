import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Portal() {
    return (
        <div style={{ "overflow-x": "hidden" }} className="col-lg-12">
            <NavBar />
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default Portal