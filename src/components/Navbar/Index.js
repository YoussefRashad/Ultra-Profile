import React from 'react'
import { Link } from 'react-router-dom';
import NavLink from './navLinks'
import { NavbarSection  } from './style.js';

function nav() {
    return (
        <NavbarSection className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <h3>Ultra<span>Profile</span></h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <NavLink />
                    </ul>

                </div>
            </div>
        </NavbarSection>
    )
}

export default nav
/*

*/