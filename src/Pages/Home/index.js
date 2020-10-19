import React from 'react';
// its Components
import Home from '../../components/Home'
import Work from '../../components/Work'
import ProjectSliding from '../../components/ProjectSliding'
import Creative from '../../components/Creative'
import Social from '../../components/Social'

const HomePage = () => {
    return (
        <main>
            <Home />
            <Work />
            <ProjectSliding />
            <Creative />
            <Social />
        </main>
    );
}

export default HomePage;
