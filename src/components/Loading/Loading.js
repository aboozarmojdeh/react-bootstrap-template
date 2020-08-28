import React from 'react';
import './Loading.css';
import ContentLoader, { Facebook } from 'react-content-loader'

const Loading = (props) => {
  return (
    <div className="App container-fluid main-container">
      <main>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info" role="alert">
              <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                speed={1}
                {...props}
              >
                <rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
                <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
                <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
                <rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
              </ContentLoader>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info" role="alert">
            <ContentLoader
                viewBox="0 0 800 160"
                height={160}
                width={800}
                speed={1}
                {...props}
              >
                <rect x="0" y="13" rx="4" ry="4" width="800" height="9" />
                <rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
                <rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
                <rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
              </ContentLoader>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info col-height1" role="alert">
              <Facebook />
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info col-height1" role="alert">
              <Facebook />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <div className="alert alert-info col-height2" role="alert">
              <Facebook />
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-12'>
            <div className="alert alert-info col-height2" role="alert">
              <Facebook />
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Loading;