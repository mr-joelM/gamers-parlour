import React from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all";

const SingleRev = () => {
    return (
        <form className="singleRev">
            <h1>this is the Single Review page!</h1>
            <ul>
                <li>
                    <h2>Review 1</h2>
                    <h3>body:</h3>
                    <h3>comments count:</h3>
                    <Link to ='/reviewComments'><h3>View all comments</h3></Link>
                    <Link to ='/addComment'><h3>Add a comment</h3></Link>
                </li>
            </ul>
        </form>
    );
};

export default SingleRev;