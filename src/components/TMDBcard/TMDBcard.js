import React from 'react';


const TMDBcard=()=>{
    return(
        <div className='container sponsor-widget' style={{ backgroundColor: '#dbdbdb' }}>
        <h4 className="title">
            {'Movie Title'}
            </h4>
        <div className="sponsor-logo-123">
          <div className="row">
            
          
            <div className="col">
              <div className="sponsor-card">
                <a href="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png" target="_blank" rel="noopener noreferrer">
                  <img src="https://f0.pngfuel.com/png/497/515/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png" alt="VS Code Pro" />
                  <div className="sponsor-details">
    <h6>{'poster_path'}</h6>
    <h6>{'popularity'}</h6>
    <h6>{'vote_count'}</h6>
    <h6>{'vote_average'}</h6>
    <h6>{'language'}</h6>
    <h6>{'title'}</h6>
    <h6>{'overview'}</h6>
    <h6>{'release_date'}</h6>
                    <div className="sponsor-name">VSCode Power User</div>
                    <div className="about-sponsor">VSCode Power User is the best course to become the master of VS Code Editor.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            
          
            <div className="col">
              <div className="sponsor-card">
                <a href="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png" target="_blank" rel="noopener noreferrer">
                  <img src="https://f0.pngfuel.com/png/497/515/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png" alt="VS Code Pro" />
                  <div className="sponsor-details">
                    <div className="sponsor-name">VSCode Power User</div>
                    <div className="about-sponsor">VSCode Power User is the best course to become the master of VS Code Editor.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            
          
            <div className="col">
              <div className="sponsor-card">
                <a href="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png" target="_blank" rel="noopener noreferrer">
                  <img src="https://f0.pngfuel.com/png/497/515/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png" alt="VS Code Pro" />
                  <div className="sponsor-details">
                    <div className="sponsor-name">VSCode Power User</div>
                    <div className="about-sponsor">VSCode Power User is the best course to become the master of VS Code Editor.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
        <hr />
        <small>Please reach out to us to sponsor our efforts in helping the community</small>
        <br />
        <a className="support-btn" href="/sponsor">Sponsor Us</a>
      </div>
    )
};


export default TMDBcard;