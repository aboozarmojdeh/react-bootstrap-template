import React from 'react';
 const Sidebar1=()=>{
     return(
        <div className='container sponsor-widget' style={{ backgroundColor: '#dbdbdb' }}>
        <h4 className="title">Our Sponsor</h4>
        <div className="sponsor-logo-123">
          <div className="row">
            <div className="col">
              <div className="sponsor-card">
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
                  <div className="sponsor-details">
                    <div className="sponsor-name">Google</div>
                    <div className="about-sponsor">The best newsletters for makers, founders, and curious minds.</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sponsor-card">
                <a href="https://webflow.com/?rfsn=3196755.b01058" target="_blank" rel="noopener noreferrer">
                  <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png" alt="Webflow" />
                  <div className="sponsor-details">
                    <div className="sponsor-name">Webflow</div>
                    <div className="about-sponsor">Build better business websites, faster. Without coding.</div>
                  </div>
                </a>
              </div>
            </div>
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

 export default Sidebar1;