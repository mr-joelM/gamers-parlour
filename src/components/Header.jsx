import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Welcome to Gamers Parlour</h1>
            <nav>
                <Link to ='/reviews'><h3>Reviews</h3></Link>
                <Link to ='/categories'><h3>Reviews</h3></Link>
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