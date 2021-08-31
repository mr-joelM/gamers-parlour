import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all";

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to Gamers Parlour</h1>
            <nav>
                <Link to ='/reviews'><h3>Reviews</h3></Link>
                <Link to ='/categories'><h3>Categories</h3></Link>
            </nav>
        </div>
    );
};

export default Header;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}