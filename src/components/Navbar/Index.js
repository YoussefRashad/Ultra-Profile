import React from 'react';
import {NavbarSection, Logo, LogoText, UlList, } from './style.js';
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container-fluid">
                <div className="row">

                    <Logo className="col-xl-7 col-lg-4 col-md-3 col-12 col-sm-12">
                        <LogoText>Ultra Profile</LogoText>
                    </Logo>

                    <UlList className="col-xl-5 col-lg-8 col-md-9 col-12 col-sm-12">
                        <NavLinks />
                    </UlList>
                </div>

            
            </div>
        </NavbarSection>
    );
};

export default Navbar;
