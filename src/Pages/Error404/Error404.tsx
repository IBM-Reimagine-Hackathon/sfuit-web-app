import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

function Error404() {
    return (
        <div className='error'>
            <h1>Page Not Found</h1>
            <p>It seems you have lost your way</p>
            <p><Link className='link' to="/login">Go To Login</Link></p>
        </div>
    )
}

export default Error404
