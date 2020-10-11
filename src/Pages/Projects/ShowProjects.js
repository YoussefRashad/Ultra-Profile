import React from 'react';
import { Link } from 'react-router-dom'

const ShowAchievements = ({ projects }) => {
    const renderData = ()=>{
        const col = projects.length === 1 ? 'col-12' 
                    : projects.length === 2 ?  'col-lg-4 col-md-6 col-12' : 'col-lg-4 col-md-6 col-12'
        return projects.map((item, index)=>{
            return (
                <div key={index} className={col}>
                    <div className="card text-center mb-3" >
                        
                        <img
                            src={item.image[0]}
                            className="card-img-top"
                            alt={item.name}
                        />

                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle text-muted">

                                    Tech:{' '}
                                    {
                                        item.technology.map((tech, index)=> {
                                            if (index === item.technology.length-1) {
                                                return <span key={index}>{tech}.</span>
                                            }
                                            return <span key={index}>{tech}, </span>
                                        }) 
                                    }
                            </h6>
                        </div>

                        <div className="text-center">
                            <Link to={`/projects/${item.id}`} className="btn btn-primary mb-2 w-60">
                                More Details
                            </Link>
                        </div>
                
                        <div className="card-footer">
                            <small className="text-muted">
                                <a href={item.githubLink} className="project-links mr-5 text-decoration-none" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href={item.liveServer} className="project-links text-decoration-none" target="_blank" rel="noopener noreferrer">Live Server</a>
                            </small>
                        </div>

                    </div>
                </div>
            );
        })
    }

    return (
        <div className="card-deck">
            <div className="row">
                {renderData()}
            </div>

        </div>
    );
}

export default ShowAchievements;
