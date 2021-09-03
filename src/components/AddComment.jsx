import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import "../css/all.css";
import filigree from"../css/filigree.png";
import axios from 'axios';


const AddComment = () => {
    const [newComment, setNewComment] = useState('')
    const [user, setUser] = useState('')
    const { review_id } = useParams(); 

    const handleSubmit = (event) => {        
        event.preventDefault();
        const commentToPost ={
            username: user,
            review_id: review_id,
            votes: 0,
            body: newComment,
        }
        postComment(review_id, commentToPost)
    }

    const postComment = (review_id, commentToPost) => {
        return axios.post(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}/comments`, commentToPost)
        .then((response) => {         
        return response.data.newComment
        }) 
        }   

    return (
        <div className="addCom">
            <h2>this is the add comment page!</h2>
            <h4>(note that for demonstration purpose we will let you use the account of "happyamy2016" to post your new comment)</h4>
            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
            <form onSubmit= {handleSubmit}>
                <label htmlFor="addcom_user_input" className="addcom_user">Enter your username:</label>
                <input id="addcom_user_input" type="text" placeholder="happyamy2016" required pattern="happyamy2016" required
                value={user} onChange={(event)=> setUser(event.target.value)}></input>
                <br></br>
                <label className="addcom_text">Write your comment: 
                    <textarea minLength="10" maxLength="150" rows="4" cols="35" required
                    value={newComment} onChange={(event)=> setNewComment(event.target.value)}                            
                    ></textarea>
                </label>
                <br></br>
                <button className="addcom_button">Submit new comment</button>
            </form>
            <img className='filigree_img' src={filigree} alt="decorative filigree"/>        
        </div>
    );
};

export default AddComment;