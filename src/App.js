import React, { Component } from 'react';
// import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Home2 from './components/Home2/Home2';
import Home3 from './components/Home3/Home3';
import Navbartop from './components/Navbar/Navbartop';
import Colorline from './components/Colorline/Colorline';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Colorline />
        <br />
        <Navbartop/>
        {/* <br /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home2" component={Home2}/>
          <Route path="/home3" component={Home3}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;