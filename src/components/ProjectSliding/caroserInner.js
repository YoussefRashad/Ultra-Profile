import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function caroserInner({ title, desc, image, url, ID, mouseEnter }) {
    
    const backgroundContent = ()=>{
        return mouseEnter? { color: '#000', fontSize: '30px', textCenter: 'center', marginBottom: '80px' }: { opacity: '0' }
    }

    return (
        <div className={`carousel-item ${!ID ? 'active' : ''}`} >
            <img
                src={image}
                className="d-block w-100 rounded img-thumbnail"
                alt="Go To Projects Section"
                style={ mouseEnter ? { opacity: '0.3' } : {} }
            />
            <div className="carousel-caption d-none d-md-block">
                <div style={{marginBottom: '220px'}}>
                    <h5 style={backgroundContent()}>{title}</h5>
                    <p  style={backgroundContent()}>{desc}</p>
                </div>
                <Link to={url.link} className="btn btn-primary">{url.caption}</Link>
            </div>
        </div>
    )
}


caroserInner.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.shape({
        link: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired
    }).isRequired,
    ID: PropTypes.number.isRequired
}

export default caroserInner

