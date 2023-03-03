import React from 'react'
import { Outlet } from 'react-router-dom'

function Resources() {
    return (
        <div>
            <h2>Resources</h2>
            <Outlet></Outlet>

        </div>
    )
}

export default Resources
