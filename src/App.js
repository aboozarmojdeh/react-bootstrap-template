import React, { Component } from "react";
import "./App.css";
// import Card from './components/Card';
// import Hr from './components/Hr';
// import Divider from './components/Divider';
import Banner from "./components/Banner";
// import Pagination from './components/Pagination';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Sidebar3 from './components/Sidebar3';
// import Newsletter from './components/Newsletter';
import Loading from "./components/Loading/Loading";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
// import TMDBcard from './components/TMDBcard/TMDBcard';
import TMDBMoviecardList from "./components/TMDBMoviecard/TMDBMoviecardList";
import TMDBTVcardList from "./components/TMDBTVcard/TMDBTVcardList";
import NYTcardList from "./components/NYTcard/NYTcardList";
import Socialcard from "./components/Socialcard/Socialcard";
import Quotecard from "./components/Quotecard/Quotecard";
import Geoposition from "./components/Geoposition/Geoposition";
// import Weathercard from './components/Weathercard/Weathercard';
import Popoverbtn from "./components/Popoverbtn/Popoverbtn";

import Scroll from "./components/Scroll/Scroll";
import { TMDBapi } from "./components/TMDBMoviecard/TMDBapi";
import { NYTapi } from "./components/NYTcard/NYTapi";

import { usePosition } from "use-position";

class App extends Component {
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
      quotes: [],
    };
  }
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
    this.getCurrentWeather(latitude, longitude);
    this.getForecastWeather(latitude, longitude);

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
      weatherCountry});
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
    

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => this.setState({ cats: data }));

    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDBapi}&language=en-US&page=1`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ movies: data.results }))

    // .then(data=>console.log(data.results.slice(0,5)))
    // console.log(this.state.movies)
    // console.log(this.state.cats)

    // fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDBapi}&language=en-US&page=1`)

    //   .then(response => response.json())
    //   .then(data => this.setState({ tvShows: data.results }))

    // .then(data=>console.log(data.results.slice(0,5)))
    // console.log('kiri',this.state.tvShows)

    // fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYTapi}`)

    //   .then(response => response.json())
    //   .then(data => this.setState({ nytNews: data.results }))

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
    
    //////////
    let randomNumber = Math.floor(Math.random() * 1644);
    const randQuote = this.state.quotes[randomNumber];
    /////////////

    if (!this.state.quotes.length ) {
      return <Loading />;
    } else{

      return (
        <div className="App container-fluid main-container">
          <main>
            <div className="row">
              <div className="col-md-8 col-sm-12 col-12 padding-class">
                <div>
                  {/* <Banner bannerText={`Enter Your Banner Text`} /> */}
                  

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
                  {/* <Geoposition /> */}
                  {/* <Weathercard /> */}
                  <Quotecard dailyQuote={randQuote} />
                  <SearchBox onSearchChange={this.onSearchChange} />
                  <div className="pinned-apis">
                    <CardList cats={filteredCats} />
                  </div>
                  {/* <br />
                <Hr />
                <Divider /> */}
                </div>
                <br />
                {/* <div className='row'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div> */}
                {/* <Pagination /> */}
              </div>
              <div className="col-md-4 col-sm-12 col-12 padding-class">
                <Scroll>
                  {/* <TMDBMoviecardList movies={filteredMovies} /> */}
                  <TMDBTVcardList tvShows={filteredTVshows} />
                  {/* <NYTcardList news={filteredNews} /> */}
                </Scroll>
                {/* <Sidebar1 /> */}
                {/* <Newsletter />
              <Sidebar2 />
              <Sidebar3 /> */}
              </div>
              {/* <div className='col-md-2 col-sm-12 col-12 padding-class'>
               
              <Socialcard />

              </div> */}
            </div>
          </main>
        </div>
      );
    }
  }
}

export default App;
