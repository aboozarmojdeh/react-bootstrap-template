import React from 'react';
import './Loading.css';

const Loading=()=>{
    return(
        <div className="App container-fluid main-container">
        <main>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
              <div className="alert alert-info" role="alert">
                Loading!!!
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
            <div className="alert alert-info" role="alert">
                Loading!!!
              </div>
            </div>
          </div>
          <div className='row'>
            <div  className='col-md-6 col-sm-12 col-12'>
              <div className="alert alert-info col-height1" role="alert">
                Loading!!!
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
            <div className="alert alert-info col-height1" role="alert">
                Loading!!!
              </div>
            </div>
          </div>
          <div className='row'>
            <div  className='col-md-6 col-sm-12 col-12'>
              <div className="alert alert-info col-height2" role="alert">
                Loading!!!
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-12'>
            <div className="alert alert-info col-height2" role="alert">
                Loading!!!
              </div>
            </div>
          </div>

        </main>

      </div>
    )
}

export default Loading;