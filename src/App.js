import React, { Component } from 'react';
import './App.css';
// import Card from './components/Card';
// import Hr from './components/Hr';
// import Divider from './components/Divider';
import Banner from './components/Banner';
// import Pagination from './components/Pagination';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Sidebar3 from './components/Sidebar3';
// import Newsletter from './components/Newsletter';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
// import TMDBcard from './components/TMDBcard/TMDBcard';
import TMDBMoviecardList from './components/TMDBMoviecard/TMDBMoviecardList';
import TMDBTVcardList from './components/TMDBTVcard/TMDBTVcardList';
import NYTcardList from './components/NYTcard/NYTcardList';

import Scroll from './components/Scroll/Scroll';
import {TMDBapi} from './components/TMDBMoviecard/TMDBapi';
import {NYTapi} from './components/NYTcard/NYTapi';






class App extends Component {

  constructor() {
    super()
    this.state = {
      cats: [],
      searchField: '',
      movies: [],
      tvShows:[],
      nytNews:[]

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ cats: data }));


    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDBapi}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results }))
    // .then(data=>console.log(data.results.slice(0,5)))

    // console.log(this.state.movies)
    // console.log(this.state.cats)

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDBapi}&language=en-US&page=1`)
    
      .then(response => response.json())
      .then(data => this.setState({ tvShows: data.results }))
      // .then(data=>console.log(data.results.slice(0,5)))
      // console.log('kiri',this.state.tvShows)

      fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYTapi}`)
    
      .then(response => response.json())
      .then(data => this.setState({ nytNews: data.results }))
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    // console.log(this.state)
    // console.log(event.target.value)
  }



  render() {
    const filteredCats = this.state.cats.filter((cat) => {
      return (
        cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      )
    });


    const filteredMovies = this.state.movies.slice(0, 5);
    const filteredTVshows=this.state.tvShows.slice(0, 5);
    const filteredNews=this.state.nytNews.slice(0, 5)

    return (
      <div className="App container-fluid main-container">
        <main>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-12'>
              <div>
                <Banner bannerText={`Enter Your Banner Text`}/>
                <SearchBox onSearchChange={this.onSearchChange} />
                <div className='pinned-apis'>

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
            <div className='col-md-6 col-sm-12 col-12'>
              <Scroll>
                {/* <TMDBMoviecardList movies={filteredMovies} /> */}
                {/* <TMDBTVcardList tvShows={filteredTVshows} /> */}
                <NYTcardList news={filteredNews}/>
              </Scroll>
               {/* <Sidebar1 /> */}
             {/* <Newsletter />
              <Sidebar2 />
              <Sidebar3 /> */}

            </div>
          </div>

        </main>

      </div>
    )
  }
}


export default App;
