import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all.css";

const Header = () => {
    return (
        <header className="header">
            <title>Gamers Parlour</title>
            <span title="Home"><Link to ='/'><h1 className="link">Gamers Parlour</h1></Link></span>
            <nav className="header_nav">
              <span title="Yeap! thats for all the reviews!"><Link to ='/reviews' className="link">Reviews</Link></span>
              <span title="Pick a Category"><Link to ='/categories' className="link">Categories</Link></span>
              <span title="Meet our reviewers"><Link to ='/users' className="link">Users</Link></span>
            </nav>            
        </header>
    );
};

export default Header;

