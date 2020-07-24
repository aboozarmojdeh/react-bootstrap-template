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



class App extends Component {
  render() {
    return (
      <div className="App container-fluid main-container">
        <main>
          <div className='row'>
            <div className='col-md-9 col-sm-12 col-12'>
              <div>
                  <Banner />
                 <div className='pinned-apis'>
                  <div className='row'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                  </div>
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
