import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Hr from './components/Hr';
import Divider from './components/Divider';
import Banner from './components/Banner';
import Pagination from './components/Pagination';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Sidebar3 from './components/Sidebar3';
import Newsletter from './components/Newsletter';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';





class App extends Component {

  constructor() {
    super()
    this.state = {
      cats: [],
      searchField: ''

    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>this.setState({cats:data}))
 
}


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    console.log(this.state)
    console.log(event.target.value)
  }

  render() {
    const filteredCats=this.state.cats.filter((cat)=>{
      return (
        cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    )
    })
    return (
      <div className="App container-fluid main-container">
        <main>
          <div className='row'>
            <div className='col-md-9 col-sm-12 col-12'>
              <div>
                <Banner />
                <SearchBox onSearchChange={this.onSearchChange} />
                <div className='pinned-apis'>
                  
                    <CardList cats={filteredCats}/>
                   
                </div>
                <br />
                <Hr />
                <Divider />
              </div>
              <br />
              <div className='row'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <Pagination />
            </div>
            <div className='col-md-3 col-sm-12 col-12'>
              <Sidebar1 />
              <Newsletter />
              <Sidebar2 />
              <Sidebar3 />

            </div>
          </div>

        </main>

      </div>
    )
  }
}


export default App;
