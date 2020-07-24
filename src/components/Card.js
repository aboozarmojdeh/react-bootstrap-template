import React from 'react';

const Card=()=>{
    return(

<div className='col-md-4 col-sm-6 col-12'>
                      <div className='card'>
                        <a className='card-link' href='https://yahoo.com'>
                          <div className="card-box card-header" style={{ backgroundColor: 'rgba(241, 169, 160, 0.5)' }}>
                            <img src="https://logo.clearbit.com/hunter.io" className="card-image" width="30" loading="lazy" alt="Hunter" />
                            <div>
                              <h6>Hunter</h6>
                              <small>Data Access</small>
                            </div>

                          </div>
                        </a>
                        <div className='card-body'>
                          <p className="card-text">Hunter API makes it easy to find or verify professional email addresses.</p>
                        </div>
                      </div>
                    </div>

    )

};

export default Card;