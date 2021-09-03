import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all.css";

const Header = () => {
    return (
        <header className="header">
            <title>Gamers Parlour</title>
            <span title="Home"><Link to ='/'><h1>Gamers Parlour</h1></Link></span>
            <nav className="header_nav">
              <span title="Yeap! thats for all the reviews!"><Link to ='/reviews'>Reviews</Link></span>
              <span title="Pick a Category"><Link to ='/categories'>Categories</Link></span>
              <span title="Meet our reviewers"><Link to ='/users'>Users</Link></span>
            </nav>            
        </header>
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