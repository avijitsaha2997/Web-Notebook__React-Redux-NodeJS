import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>

            <h2>now im in the Home page</h2>
            <Outlet></Outlet>



        </div>
    )
}

export default Home
