import React from "react";
import "./Popoverbtn.css";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import {
  FaCloudSun,
  FaCloudSunRain,
  FaCloudRain,
  FaCloudMoon,
  FaSun,
} from "react-icons/fa";

const weather = {}; 
weather.temperature = {  
    unit : "celsius"  
}  
  
const KELVIN = 273;  
  
const key = "f9034a6c94020d9f76bb28cdf288ea27";  

 

const Popoverbtn = ({lat,long}) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let dayNumber = d.getDay();
  let dayString = days[dayNumber];

  function getWeather(latitude, longitude){  
    // let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;  
    // let api =  `pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${key}`
    let api =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
    console.log(api)
    fetch(api)
      .then(response => response.json())
      .then(data => {
        // weather.temperature.value = Math.floor(data.main.temp - KELVIN);  
        // weather.description = data.weather[0].description;  
        // weather.iconId = data.weather[0].icon;  
        // weather.city = data.name;  
        // weather.country = data.sys.country;
        // weather.country = data.sys.country;
        console.log(data)
      })
          
}
getWeather(lat,long)
// console.log(weather)
 
  return (
    <div>
      <div>{lat}</div>
      <div>{long}</div>
      <Button
        style={{ backgroundColor: "#E9ECEF" }}
        id="PopoverFocus"
        type="button"
      >
        <div style={{ color: "#209CEE" }}>
          23&deg;
          <span>
            <FaCloudSun style={{ marginLeft: "15px", fontSize: "1.5rem" }} />
          </span>
        </div>
        <div style={{ color: "#209CEE", fontSize: ".8rem" }}>
          Toronto, Canada
        </div>
        <div style={{ color: "#209CEE" }}>{dayString}</div>
      </Button>

      <UncontrolledPopover
        trigger="hover"
        placement="right"
        target="PopoverFocus"
      >
        {/* <PopoverHeader>5 hours forecast</PopoverHeader> */}
        <PopoverBody style={{ padding: "0" }}>
          <div
            className="card card-2 new-card "
            style={{ margin: "5px", backgroundColor: "#71C9F8" }}
          >
            <div className="row">
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
              <div className="col">
                <div className="row row1">20&deg;</div>
                <div className="row row2">
                  <FaCloudRain className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">1:00</div>
                <div className="row row4">PM</div>
              </div>
              <div className="col">
                <div className="row row1">20&deg;</div>
                <div className="row row2">
                  <FaCloudMoon className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">2:00</div>
                <div className="row row4">PM</div>
              </div>
              <div className="col">
                <div className="row row1">19&deg;</div>
                <div className="row row2">
                  <FaSun className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">3:00</div>
                <div className="row row4">PM</div>
              </div>
              <div className="col">
                <div className="row row1">18&deg;</div>
                <div className="row row2">
                  <FaSun className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/cotton/64/000000/rain--v3.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">4:00</div>
                <div className="row row4">PM</div>
              </div>
            </div>
          </div>
          <div
            className="card card-3 new-card"
            style={{ margin: "5px", backgroundColor: "#405D9A" }}
          >
            <div className="row">
              <div className="col">
                <div className="row row1">21&deg;</div>
                <div className="row row2">
                  <FaSun className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">Mon</div>
              </div>
              <div className="col">
                <div className="row row1">20&deg;</div>
                <div className="row row2">
                  <FaSun className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/ios/100/000000/sun.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">Tue</div>
              </div>
              <div className="col">
                <div className="row row1">16&deg;</div>
                <div className="row row2">
                  <FaCloudRain className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">Wed</div>
              </div>
              <div className="col">
                <div className="row row1">17&deg;</div>
                <div className="row row2">
                  <FaSun className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/windows/100/000000/cloud.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">Thu</div>
              </div>
              <div className="col">
                <div className="row row1">18&deg;</div>
                <div className="row row2">
                  <FaCloudRain className="img-fluid" />
                  {/* <img
                  className="img-fluid"
                  src="https://img.icons8.com/cotton/64/000000/rain--v3.png"
                  alt=""
                /> */}
                </div>
                <div className="row row3">Fri</div>
              </div>
            </div>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Popoverbtn;
