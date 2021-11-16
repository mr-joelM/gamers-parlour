import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useParams } from "react-router-dom"; 
import "../css/all.css";
import filigree from"../css/filigree.png";
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const { category } = useParams();

    const getReviews = async () => {
        const { data } = await axios.get('https://gamers-parlour.herokuapp.com/api/reviews',{
            params:{ category , page}
        })
        return data
    }

    useEffect(()=>{
        window.scrollTo(0, 0)
        getReviews()
        .then((data)=>{
            setReviews(data.reviews)
            setIsLoading(false)
        })
    },[page])

    if(isLoading)return <h3>LOADING...</h3>
    return (
        <div className="reviews">
            <h2>{category ? `This is the Reviews by category:${category}`:'This is the All Reviews page!'}</h2>
            <ul>
                {reviews.map((review)=>{
                    return(
                        <li key={review.review_id}>
                            <div className="all-reviews-list" key={review.review_id}>
                                <h2><Link to ={`/review/${review.review_id}`}>{review.title}</Link></h2>
                                <h3>Review Owner: {review.owner}</h3>
                                <h3>Category: {review.category}</h3>
                                <img className='review_list_img' src={review.review_img_url} alt={review.title} />
                            </div>
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </li>
                    )
                })}
            </ul>
            <section className="page_button">
                <button disabled={page === 1} onClick={() => setPage((cPage)=> cPage -1)}>{'<'} </button>
                     Page:{page} 
                <button onClick={() => setPage((cPage)=> cPage +1)}> {'>'}</button>
            </section>
        </div>
    );
};

export default Reviews;

