import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all";

const RevByCat = () => {
    return (
        <form className="categories">
            <h2>Reviews by Category: Strategy</h2>
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
        </form>
    );
};

export default RevByCat;