import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import filigree from"../css/filigree.png";

const HomePage = () => {

    window.scrollTo(0, 0)
    
    return (
        <div className="homePage">
            <h3>Welcome to Gamers Parlour!</h3>
            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
            <h4>The place to comment and read about reviews of games you never heard of!</h4>
            <h4>To start your journey, please click on Reviews to get the all lot or for a more refined search used the Category (note that by hovering above the category of your choice with your mouse a brief description of it will appear)</h4>
            <img className='filigree_img' src={filigree} alt="decorative filigree"/>        
        </div>
    );
};

export default HomePage;