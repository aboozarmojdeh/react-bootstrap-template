import React from 'react';

const Banner=()=>{
    return(
        <div>
             <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                  <div className='webflow-banner'>
                    <img src="./img/banner.png" width="25px" height="25px" alt="" />
                    <div className='banner-text'>Enter your banner text here</div>
                  </div>
                </a>
        </div>
    )
}



export default Banner;