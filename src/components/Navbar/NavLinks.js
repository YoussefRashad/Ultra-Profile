
import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem } from './style'

const NavLinks = () => {

    return (
        <nav className="row">
                <ListItem className="list-item">
                    <Link 
                        to="/" 
                        className="list-Link"
                    >Home</Link>
                </ListItem>

                <ListItem className="list-item">
                    <Link to="/work" className="list-Link">Work</Link>
                </ListItem>

                <ListItem className="list-item">
                    <Link to="/projects" className="list-Link">Projects</Link>
                </ListItem>

                <ListItem className="list-item">
                    <Link to="/achievement" className="list-Link">Achievement</Link>
                </ListItem>

                <ListItem className="list-item">
                    <Link to="/about" className="list-Link">About</Link>
                </ListItem>

                <ListItem className="list-item">
                    <Link to="/contact" className="list-Link">Contact</Link>
                </ListItem>
        </nav>
    );
}

export default NavLinks;
