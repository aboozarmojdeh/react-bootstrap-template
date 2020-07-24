import React from 'react';

const Card=(props)=>{
    return(

<div className='col-md-4 col-sm-6 col-12'>
                      <div className='card'>
                        <a className='card-link' href={`https://${props.website}`} target='_blank' rel="noopener noreferrer">
                          <div className="card-box card-header" style={{ backgroundColor: 'rgba(241, 169, 160, 0.5)' }}>
                            <img src={`https://robohash.org/set_set4/${props.id}?200x200`} className="card-image" width="30" loading="lazy" alt={props.name} />
                            <div>
                              <h6>{props.name}</h6>
                              <small>{props.companyName}</small>
                            </div>

                          </div>
                        </a>
                        <div className='card-body'>
                          <p className="card-text">{props.description}</p>
                        </div>
                      </div>
                    </div>

    )

};

export default Card;