import React from 'react';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <div className="jumbotron mt-5 container">
                <h1 className="display-4">Error 404!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <Link className="btn btn-danger btn-lg" to="/">Go to home page</Link>
            </div>
        </div>
    );
}

export default Error;
