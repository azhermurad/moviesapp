import React from 'react';
import './App.css';
import Search from "../src/Search";
import Trending from "../src/Trending";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <Search/>
        <Trending />
      </div>
    );
  }
}

export default App;
