import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all";

const Reviews = () => {
    return (
        <div className="allreviews">
            <h1>this is the All Reviews page!</h1>
            <ul>
                <li>
                    <h2><Link to ='/singleRev'>Review name</Link></h2>
                    <h3>body:</h3>
                    <h3>comments count:</h3>
                </li>
                <li>
                    <h2><Link to ='/singleRev'>Review name</Link></h2>
                    <h3>body:</h3>
                    <h3>comments count:</h3>
                </li>
                <li>
                    <h2><Link to ='/singleRev'>Review name</Link></h2>
                    <h3>body:</h3>
                    <h3>comments count:</h3>
                </li>
            </ul>
        </div>
    );
};

export default Reviews;