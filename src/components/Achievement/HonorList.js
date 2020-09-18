import React from 'react';

const HonorList = props => {

    console.log(props.Honors)
  const returnedData = props.Honors.map (item => {
    
    return (
      <React.Fragment key={item.ID}>
        <div className="card text-center" style={{maxWidth: '335.672px'}}>
          <img
            src="images/Home/home-bg.jpg"
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
              {console.log(item.credential_URL)}
            </a>
          </div>

          <div className="card-footer">
            <small className="text-muted">{item.date}</small>
          </div>
        </div>

        {item.ID % 3 === 0 ? <p className="w-100" /> : null}
      </React.Fragment>
    );
  });

  return (
    <div className="card-deck mb-2 mx-2">
      {returnedData}
    </div>
  );
};

export default HonorList;
