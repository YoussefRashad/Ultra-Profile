import React from 'react'
import { Link } from 'react-router-dom'

function navLink() {
    return (
        <>
            <li className="nav-item">
                <Link
                    to="/"
                    className="list-Link"
                >Home <span className="sr-only">(current)</span></Link>
            </li>
            
            <li className="nav-item">
                <Link to="/work" className="list-Link">Work</Link>
            </li>

            <li className="nav-item">
                <Link to="/projects" className="list-Link">Projects</Link>
            </li>

            <li className="nav-item">
                <Link to="/achievement" className="list-Link">Achievement</Link>
            </li>

            <li className="nav-item">
                <Link to="/about" className="list-Link">About</Link>
            </li>

            <li className="nav-item">
                <Link to="/contact" className="list-Link">Contact</Link>
            </li>

        </>
    )
}

export default navLink