import React, { Component, Fragment } from "react";
import "./Home.css";
import Navbartop from '../Navbar/Navbartop';
// import Card from '../Card';
// import Hr from '../Hr';
// import Divider from '../Divider';
import Banner from "../Banner";
// import Pagination from '../Pagination';
// import Sidebar1 from '../Sidebar1';
// import Sidebar2 from '../Sidebar2';
// import Sidebar3 from '../Sidebar3';
// import Newsletter from '../Newsletter';
import Loading from "../Loading/Loading";
import SearchBox from "../SearchBox";
import CatcardList from "../Catcard/CatcardList";
import Navcard from '../Navcard/Navcard';
import Carddeck from '../Carddeck/Carddeck';
import CarddeckList from '../Carddeck/CarddeckList';
// import TMDBcard from '../TMDBcard/TMDBcard';
import TMDBMoviecardList from "../TMDBMoviecard/TMDBMoviecardList";
import TMDBTVcardList from "../TMDBTVcard/TMDBTVcardList";
import NYTcardList from "../NYTcard/NYTcardList";
import LnewscardList from '../Localnewscard/LnewscardList';
import Socialcard from "../Socialcard/Socialcard";
import Quotecard from "../Quotecard/Quotecard";
import Geoposition from "../Geoposition/Geoposition";
// import Weathercard from '../Weathercard/Weathercard';
import Popoverbtn from "../Popoverbtn/Popoverbtn";
import WidgetHeader from "../WidgetHeader/WidgetHeader";
import Scroll from "../Scroll/Scroll";
import { TMDBapi } from "../TMDBMoviecard/TMDBapi";
import { NYTapi } from "../NYTcard/NYTapi";
import {LnewsApi} from '../Localnewscard/LocalNewsapi';
import { ButtonToggle } from "reactstrap";

import { usePosition } from "use-position";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { FaRegNewspaper } from "react-icons/fa";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      userLatitude: "",
      userLongitude: "",
      weatherTemp: "",
      weatherFeelsLike:"",
      weatherDescription: "",
      weatherIconSrc: "",
      weatherCity: "",
      weatherCountry: "",
      weatherForecastList:[],
      cats: [],
      searchField: "",
      movies: [],
      tvShows: [],
      nytNews: [],
      localNews:[],
      quotes: [],
      ipInfo:{
        city:'',
        country:'',
        ip:'',
        loc:{
          lat:'',
          long:''
        },
        region:''
      },
      widgetSearchRequestText:'your interests',
      widgetSearchRequestURL:''
      
    };
  }
  /////////IP Info ///////////////////////
  async getIPinfo(){  
    try{
      let ipInfoObj={
        loc:{}
      };
      const ipInfoToken='82197c9128c110';
      let IPLink=`http://ipinfo.io/?token=${ipInfoToken}`;
      const response = await fetch(IPLink);
      const data = await response.json();
      let city= data.city;
      let country= data.country;
      let currentIP=data.ip;
      let CurrentLatitude=data.loc.split(',')[0]
      let CurrentLongitude=data.loc.split(',')[1]
      let region=data.region;
      
ipInfoObj.city=city;
ipInfoObj.country=country;
ipInfoObj.ip=currentIP;
ipInfoObj.loc.lat=CurrentLatitude;
ipInfoObj.loc.long=CurrentLongitude;
ipInfoObj.region=region;
      
      this.setState({
        ipInfo:ipInfoObj
    });

  // console.log('data',data)
  // console.log('ipInfoObj',ipInfoObj)

  this.getCurrentWeather(CurrentLatitude, CurrentLongitude);
  this.getForecastWeather(CurrentLatitude, CurrentLongitude);
    } catch(err){
      console.log("forecast ooooooops", err);
    }
   
          
  }

  ////////////////////////////////////////


  /////////Local News fetch Info ///////////////////////
   
  async getLocalNews(){  
      try{
        
        
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.ipInfo.country.toLowerCase()}&apiKey=${LnewsApi}`);
        const data = await response.json();
        
        // console.log('Local News Api',data.articles)
        this.setState({ localNews: data.articles, widgetSearchRequestText:"Local News",widgetSearchRequestURL:"Local News" })
        
  
      } catch(err){
        console.log("localnews ooooooops", err);
      }
     
            
    }
  
    ////////////////////////////////////////
  
  /////Geolocation for Popover Component////

  getCoordinates() {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  async getLocation() {
    // notice, no then(), cause await would block and
    // wait for the resolved result
    const position = await this.getCoordinates();
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    this.setState({ userLatitude: latitude, userLongitude: longitude });
    
    console.log(latitude, longitude);
    // this.getCurrentWeather(latitude, longitude);
    // this.getForecastWeather(latitude, longitude);

    // console.log(this.state);
  }
  //////////////GET Current Weather////////////////////////
  async getCurrentWeather(latitude, longitude) {
    
   try {
    const KELVIN = 273.15;

    // const key = "f9034a6c94020d9f76bb28cdf288ea27"; //google
    const key='6c4640d7e71e9d9a0e3b30fc6a699f3e'; //yahooo
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    const response = await fetch(api);
    const data = await response.json();
    let weatherTemp = Math.floor(data.main.temp - KELVIN);
    let weatherFeelsLike=Math.floor(data.main.feels_like-KELVIN);
    let weatherDescription = data.weather[0].description;
    let weatherIconSrc =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let weatherCity = data.name;
    let weatherCountry = data.sys.country;
    

    this.setState({
      weatherTemp,
      weatherFeelsLike,
      weatherDescription,
      weatherIconSrc,
      weatherCity,
      weatherCountry
  });
    } catch(err) {
      console.log("current ooooooops", err);
    }
    
   }
    

    // console.log('weather kiri',data)
  
  ///////////////////////////////////////
  //////////////GET Forecast Weather////////////////////////
  async getForecastWeather(latitude, longitude){  
    try{
      const KELVIN = 273.15;
      // const key = "f9034a6c94020d9f76bb28cdf288ea27"; //google
      const key='6c4640d7e71e9d9a0e3b30fc6a699f3e'; //yahooo
      let api =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
      const response = await fetch(api);
      const data = await response.json();
        let weatherForecastList = data.list;
  //    let weatherFeelsLike=Math.floor(data.main.feels_like-KELVIN);
  //    let weatherDescription = data.weather[0].description;
  //    let weatherIconSrc =
  //      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  //    let weatherCity = data.name;
  //    let weatherCountry = data.sys.country;
  // console.log('weatherForecastList',weatherForecastList)
  
     this.setState({
      weatherForecastList});
  // console.log('forecast',data.list)
  
    } catch(err){
      console.log("forecast ooooooops", err);
    }
   
          
  }
  //////////////////////////////////////////////////////////

  componentDidMount() {
    // this.getLocation();
    this.getIPinfo();
    // this.getLocalNews()

    ////////////////////jsonplaceholder fetch////////////////////////
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ cats: data }));


    ////////////////////TMDB Movie fetch////////////////////////
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDBapi}&language=en-US&page=1`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ movies: data.results }))

    // .then(data=>console.log(data.results.slice(0,5)))
    // console.log(this.state.movies)
    // console.log(this.state.cats)


     ////////////////////TMDB Series fetch////////////////////////
    // fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDBapi}&language=en-US&page=1`)

    //   .then(response => response.json())
    //   .then(data => this.setState({ tvShows: data.results }))

    // .then(data=>console.log(data.results.slice(0,5)))
    // console.log('kiri',this.state.tvShows)


    ////////////////////NYT news fetch////////////////////////
    // fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYTapi}`)

    //   .then(response => response.json())
    //   .then(data => this.setState({ nytNews: data.results }))




////////////////////Quotes fetch////////////////////////
    fetch(`https://type.fit/api/quotes`)
      .then((response) => response.json())
      .then((data) => this.setState({ quotes: data }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    // console.log(this.state)
    // console.log(event.target.value)
  };

  render() {
////////////////ITEM TEST for Searching the subjects////////////////////////
    const itemsTest=[
      {
name:"Local News"
      },
      {
name:"Movies"
      }
    ];
/////////////////////////////////////////
    const filteredCats = this.state.cats.filter((cat) => {
      return cat.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    /////////////
    const filteredMovies = this.state.movies.slice(0, 5);
    ////////////
    const filteredTVshows = this.state.tvShows.slice(0, 5);
    /////////////
    const filteredNews = this.state.nytNews.slice(0, 5);
    //////////
    const filteredLocalNews = this.state.localNews.slice(0, 6);
    //////////
    let randomNumber = Math.floor(Math.random() * 1644);
    const randQuote = this.state.quotes[randomNumber];
    /////////////

    if (!this.state.quotes.length ) {
      return (
        <div>
        {/* <Navbartop /> */}
      <Loading />
      </div>)
    } else{

      return (
       <Fragment>
          {/* <Navbartop /> */}
          {/* <div className="side-bar" style={{float:"right",marginTop:'20px'}}>
          <Popoverbtn
                    lat={this.state.userLatitude}
                    long={this.state.userLongitude}
                    weatherTemp={this.state.weatherTemp}
                    weatherFeelsLike={this.state.weatherFeelsLike}
                    weatherDescription={this.state.weatherDescription}
                    weatherIconSrc={this.state.weatherIconSrc}
                    weatherCity={this.state.weatherCity}
                    weatherCountry={this.state.weatherCountry}
                    weatherForecastList={this.state.weatherForecastList}
                  />
                   <br />
                  <Socialcard />
                  
                  <ButtonToggle onClick={()=>this.getLocalNews()} color="primary">
                    <FaRegNewspaper />
                  </ButtonToggle>{' '}
                  <br />
                 
                  // <button onClick={()=>this.getLocalNews()}>hi</button>
                  </div> */}
<div className="App container-fluid main-container">

          <main>
            <div className="row">
              <div className="col-md-3 col-sm-12 col-12 padding-class">
              <div>
                  {/* <Banner bannerText={`Enter Your Banner Text`} /> */}
                  
                  
                  {/* <Geoposition /> */}
                  {/* <Weathercard /> */}
                  <Quotecard dailyQuote={randQuote} />
                
                  <div className="card">
        <div className="card-header header-bg">
          Quote of the day
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="d-inline-flex p-2">
            <Popoverbtn 
                    lat={this.state.userLatitude}
                    long={this.state.userLongitude}
                    weatherTemp={this.state.weatherTemp}
                    weatherFeelsLike={this.state.weatherFeelsLike}
                    weatherDescription={this.state.weatherDescription}
                    weatherIconSrc={this.state.weatherIconSrc}
                    weatherCity={this.state.weatherCity}
                    weatherCountry={this.state.weatherCountry}
                    weatherForecastList={this.state.weatherForecastList}
                  />
            </div>
          
            <div className="d-inline-flex p-2">
                  <Socialcard />
                  </div>
                  <div className="d-inline-flex p-2">
                  <ButtonToggle onClick={()=>this.getLocalNews()} color="primary">
                    <FaRegNewspaper />
                  </ButtonToggle>{' '}
                  </div>
                  <br />

            <p style={{fontSize:'14px'}}></p>
            <footer className="blockquote-footer"><cite title="Source Title" style={{fontSize:'12px'}}></cite></footer>
          </blockquote>
        </div>
      </div>


                  
                  <SearchBox onSearchChange={this.onSearchChange} />
                  <div className="pinned-apis">
                    <CatcardList cats={filteredCats} />
                  </div>
                  {/* <br />
                <Hr />
                <Divider /> */}
                </div>
                 
            </div>
              <div className="col-md-9 col-sm-12 col-12 padding-class">
              <WidgetHeader  widgetHeaderLink={`${this.state.widgetSearchRequestURL}`} widgetHeaderText={`Your search result about ${this.state.widgetSearchRequestText}`}/>

               {/* <CarddeckList /> */}
              
                {/* <Scroll> */}
                  {/* <TMDBMoviecardList movies={filteredMovies} /> */}
                  {/* <TMDBTVcardList tvShows={filteredTVshows} /> */}
                  {/* <NYTcardList news={filteredNews} /> */}
                  <LnewscardList localNews={filteredLocalNews} />
                  <br />
                  
                  {/* <Navcard /> */}
                
                  
                {/* </Scroll> */}
                {/* <Sidebar1 /> */}
                {/* <Newsletter />
              <Sidebar2 />
              <Sidebar3 /> */}
           
                <br />
               
                
              </div>
          
              
            </div>
          </main>
        </div>
        </Fragment>
      );
    }
  }
}

export default Home;
