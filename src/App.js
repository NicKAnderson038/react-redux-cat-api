// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import CatPage from "./containers/Cats";
import FavoritePage from "./containers/Favorites";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="link" to="/">
            Cat List
          </Link>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </header>
        <main>
          <Route exact path="/" component={CatPage} />
          <Route exact path="/favorites" component={FavoritePage} />
        </main>
      </div>
    );
  }
}

export default App;
