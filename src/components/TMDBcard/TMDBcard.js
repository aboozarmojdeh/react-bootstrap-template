import React from 'react';
import './TMDBcard.css';


const TMDBcard = (props) => {
  return (
    <div className='container movie-widget' style={{ backgroundColor: '#dbdbdb' }}>
      <h4 className="title">
        {'Movie Title'}
      </h4>
      <div className="movie-logo-123">
        <div className="row">


          <div className="col">
            <div className="movie-card">
              <a href="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png" target="_blank" rel="noopener noreferrer">
                <img src="https://f0.pngfuel.com/png/497/515/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png" alt="VS Code Pro" />
                <div className="movie-details">
                  <h6>{props.popularity}</h6>
                  <h6>{props.voteCount}</h6>
                  <h6>{props.voteAverage}</h6>
                  <h6>{props.movieLanguage}</h6>
                  <h6>{props.movieTitle}</h6>
                  <h6>{props.movieOverview}</h6>
                  <h6>{props.movieDate}</h6>
                  <h6>{props.moviePosterPath}</h6>
                  <h6>{props.movieBGPath}</h6>

                  <div className="movie-name">VSCode Power User</div>
                  <div className="about-movie">VSCode Power User is the best course to become the master of VS Code Editor.</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />


      </div>
      <hr />
      <small>Please reach out to us to sponsor our efforts in helping the community</small>
      <br />
      <a className="support-btn" href="/movie">Sponsor Us</a>
    </div>
  )
};


export default TMDBcard;