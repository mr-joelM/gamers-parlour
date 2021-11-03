import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import VotingButtonsRev from './VotingButtonsRev';
import {parseDate} from "../utils";

const SingleRev = () => {
    const [singleReview, setSingleReview] = useState({})
    const { review_id } = useParams(); 

    useEffect(()=>{
        fetch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}` )
        .then((response)=>{return response.json()})
        .then((data)=>{setSingleReview(data.review)})
    },[])

    return (
        <div className="singleRev">
            <h1>this is the Single Review page!</h1>
            <ul>
                <li className='review' key={singleReview.review_id}>
                    <h2>{singleReview.title}</h2>
                    <h3>Review made by:{singleReview.owner}</h3>
                    <h3>" {singleReview.review_body} "</h3>
                    <img className='review_img' src={singleReview.review_img_url} alt={singleReview.title}/>
                    <h3>Game designer:{singleReview.designer}</h3>
                    <h3>Game category:{singleReview.category}</h3>
                    <h3>Posted on: {parseDate(singleReview.created_at)}</h3>
                    <h3>Comments count:{singleReview.comment_count}</h3>
                    <Link to ={`/review/${singleReview.review_id}/comments`}><h3>View all comments</h3></Link>
                    <Link to ={`/review/${singleReview.review_id}/addComment`}><h3>Add a comment</h3></Link>
                    <h3>Current votes for this review: {singleReview.votes}</h3>
                        <VotingButtonsRev review_id={review_id} setSingleReview={setSingleReview}/>
                    <h4>We would like to have your opinion, please feel free to update the votes result by using the provided buttons.</h4>
                </li>
            </ul>
        </div>
    );
};

export default SingleRev;