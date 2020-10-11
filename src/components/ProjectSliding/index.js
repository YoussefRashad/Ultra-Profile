import React from 'react';
import CarosuelShowList from './carosuelShowList'
const index = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <h1 className="display-5 text-center my-5 pt-5 container">
                My Projects
        </h1>

        <CarosuelShowList />
        
        </div>
    );
}

export default index;
