import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/home/about">About me</Link><br />
            <Link to="/home/services">Services</Link><br />
            <Link to="/resources/skills">Skills</Link><br />
            <Link to="/resources/products">Products</Link>

        </div>
    )
}

export default Navbar
