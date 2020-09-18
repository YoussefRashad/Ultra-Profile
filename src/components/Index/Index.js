import React from 'react';
import Home from '../Home/Index';
import Work from '../Work/Index';
import Projects from '../Projects/Index';
import Profile from '../Profile/Index';
import Creative from '../Creative/Index';
import Social from '../Social/Index';

export default function Index() {
    return (
        <div>
            <Home />
            <Work />
            <Projects />
            <Profile />
            <Creative />
            <Social />
        </div>
    )
}
