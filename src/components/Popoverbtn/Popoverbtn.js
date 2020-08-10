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
import Popoverbtnhourcard from './Popoverbtnhourcard';
  
const KELVIN = 273.15;  
  
const key = "f9034a6c94020d9f76bb28cdf288ea27";  



const Popoverbtn = ({lat,long,weatherTemp,weatherFeelsLike,weatherDescription,weatherIconSrc,weatherCity,weatherCountry,weatherForecastList}) => {

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


const weather = {}; 
weather.temperature = {  
  unit : "celsius"
}  ;

//////////////Get Hour and AM PM show/////////////////


//////////////////////////////////////////////////////
const filteredweatherForecastList = weatherForecastList.slice(0, 5);
    // console.log('AboofilteredweatherForecastList',filteredweatherForecastList)
///////////////////////Card List Array////////////////
const weatherForecastArray = filteredweatherForecastList.map((list, i) => {
  return (
      <Popoverbtnhourcard key={list.dt} forecastTime={list.dt} forecastTemp={list.main.temp} forecastFeelsLike={list.feels_like} forecatIcon={list.weather[0].icon} forecastDescription={list.weather[0].description} />
  )
})

////////////////////////////////////////////////////


  return (
    
    <div className="className">
      {/* <div>{lat}</div>
      <div>{long}</div> */}
      <Button
        style={{ backgroundColor: "#E9ECEF" }}
        id="PopoverFocus"
        type="button"
      >
        <div style={{ color: "#209CEE" }}>
        <div>
          <span style={{ color: "#209CEE", fontSize: "1rem" }}>{weatherTemp}&deg;</span>
          
          <span>
          <img src={weatherIconSrc} alt="" />
            
          </span>
          </div>
          <div><span style={{ color: "#209CEE", fontSize: ".8rem",marginTop:'0' }}>Feels like: {weatherFeelsLike}&deg;</span></div>
          
        </div>
        
        <div style={{ color: "#209CEE", fontSize: ".8rem" }}>
          {weatherDescription}
        </div>
        <div style={{ color: "#209CEE", fontSize: ".8rem" }}>
          {weatherCity}, {weatherCountry}
        </div>
        <div style={{ color: "#209CEE" }}>{dayString}</div>
      </Button>

      <UncontrolledPopover style={{ padding: "0" }}
        trigger="hover"
        placement="right-end"
        target="PopoverFocus"
        
      >
        {/* <PopoverHeader>5 hours forecast</PopoverHeader> */}
        <PopoverBody >
          <div
            className="card card-2 new-card "
            style={{ margin: "5px", backgroundColor: "#71C9F8" }}
          >
            <div className="row">
            {weatherForecastArray}
            
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
