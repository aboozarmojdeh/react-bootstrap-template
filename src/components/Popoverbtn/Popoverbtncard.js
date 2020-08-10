import React from 'react';
import {
    FaCloudSun,
    FaCloudSunRain,
    FaCloudRain,
    FaCloudMoon,
    FaSun,
  } from "react-icons/fa";
const Popoverbtncard=()=>{
    return(
<div className="col" style={{ color: "white" }}>
                <div className="row row1" style={{ color: "white" }}>
                  21&deg;
                </div>
                <div className="row row2">
                  <FaCloudSunRain className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">12:00</div>
                <div className="row row4">PM</div>
              </div>
    )
};

export default Popoverbtncard;

