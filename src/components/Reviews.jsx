import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import "../css/filigree.png";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://gamers-parlour.herokuapp.com/api/reviews' )
        .then((response)=>{return response.json()})
        .then((data)=>{setReviews(data.reviews)})
    },[])

    return (
        <div className="allreviews">
            <h1>this is the All Reviews page!</h1>
            <ul>
                {reviews.map((review)=>{
                    return(
                        <form>
                            <li className="all-reviews-list" key={review.review_id}>
                                <h2><Link to ={`/review/${review.review_id}`}>{review.title}</Link></h2>
                                <h3>Review Owner: {review.owner}</h3>
                                <h3>Category: {review.category}</h3>
                                <img className='review_list_img' src={review.review_img_url} alt={review.title} />
                            </li>
                            <img className='review_fili_img' src='../css/filigree.png' alt="decorative filigree"/>
                        </form>
                    )
                })}
            </ul>
        </div>
    );
};

export default Reviews;

