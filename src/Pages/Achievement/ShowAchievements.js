import React from 'react';

const ShowAchievements = ({achievements}) => {
    const renderData = ()=>{
        const col = achievements.length === 1 ? 'col-12' 
                    : achievements.length === 2 ?  'col-lg-4 col-md-6 col-12' : 'col-lg-4 col-md-6 col-12'
        return achievements.map((item, index)=>{        
        return (
            <div key={index} className={col}>
                <div className="card text-center mb-3">
                    <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.name + " from " + item.organization}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        From {item.organization}
                        </h6>
            
                    </div>
                    <div className="text-center">
                        <a href={item.credential_URL} target="blank" className="btn btn-primary mb-2 w-60">
                        Credential URL
                        </a>
                    </div>
            
                    <div className="card-footer">
                        <small className="text-muted">{item.date}</small>
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
