import React from 'react';
import { dataProjects } from '../../data'
import Error from '../Error'
import "./style.css"

const SingleProject = (props) => {
    const projectData = dataProjects[props.match.params.id-1]
    if( !projectData ){
        return <Error />
    }
    const {
        name,
        description,
        technology,
        type,
        githubLink,
        liveServer,
        video,
    } = projectData;

    const [ defImg, ...images ] = projectData.image
    console.log(defImg, images);
    return (
        <div className="container-fluid">
            <div className="row my-3">
                <div className="col-xl-6 col-12">
                    <img src={defImg} alt={name} className="mw-100" />
                </div>

                <div className="project my-5 col-xl-6 col-12">
                    <p>Project Name: <span className="projectInfo">{name}</span></p>
                    <p>Description: <span className="projectInfo">{description}</span></p>
                    <p>Technologies are used: <span className="projectInfo">
                        {
                            technology.map((item, index)=> {
                                if (index === technology.length-1) {
                                    return <span key={index}>{item}.</span>
                                }
                                return <span key={index}>{item}, </span>
                            }) 
                        }
                    </span></p>
                    <p>Type: <span className="projectInfo">{type}</span></p>
                    
                    {
                        githubLink &&
                        <p>Github Link: <span className="projectInfo">
                            <a href={githubLink} className="text-decoration-none" target="_blank" rel="noopener noreferrer">Link</a>
                        </span></p>
                    }

                    {
                        liveServer &&
                        <p>Live Server: <span className="projectInfo">
                            <a href={liveServer} className="text-decoration-none" target="_blank" rel="noopener noreferrer">Link</a>
                        </span></p>
                    }

                    {
                        video &&
                        <p>Video: <span className="projectInfo">
                            <a href={video} className="text-decoration-none" target="_blank" rel="noopener noreferrer">Link</a>
                        </span></p>
                    }
                </div>

            </div>
                    
            <div className="row">
                {
                    images.map((image, index) => <img src={image} alt={name} className="col-4" key={index} /> )
                }
            </div>
        </div>
    );
}

export default SingleProject;
