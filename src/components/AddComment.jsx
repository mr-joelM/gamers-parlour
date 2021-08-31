import React from 'react';
import "../css/all.css";

const AddComment = () => {
    return (
        <form className="addCom {
            ">
            <h1>this is the add comment page!</h1>
            <li>
                <h2>Author: jessjelly</h2>
                <h3>Posted: </h3>
                <h3>Votes: 3</h3>
                <h3>Body: "Quis duis mollit ad enim deserunt."</h3>
            </li> 
            <button>Submit new comment</button>           
        </form>
    );
};

export default AddComment;