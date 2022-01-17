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
        window.scrollTo(0, 0)
        fetch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}` )
        .then((response)=>{return response.json()})
        .then((data)=>{setSingleReview(data.review)})
    },[])
    
    
    
    return (
        <div className="singleRev">
            
            <ul>
                <li className='review' key={singleReview.review_id}>
                    <h3>{singleReview.title}</h3>
                    <h4>Review made by:{singleReview.owner}</h4>
                    <h4>" {singleReview.review_body} "</h4>
                    <img className='review_img' src={singleReview.review_img_url} alt={singleReview.title}/>
                    <h4>Game designer:{singleReview.designer}</h4>
                    <h4>Game category:{singleReview.category}</h4>
                    <h4>Posted on: {parseDate(singleReview.created_at)}</h4>
                    <h4>Comments count:{singleReview.comment_count}</h4>
                    <Link to ={`/review/${singleReview.review_id}/comments`}><h4 className="link">View all comments</h4></Link>
                    <Link to ={`/review/${singleReview.review_id}/addComment`}><h4 className="link">Add a comment</h4></Link>
                    <h4>Current votes for this review: {singleReview.votes}</h4>
                        <VotingButtonsRev review_id={review_id} setSingleReview={setSingleReview}/>
                    <h4>We would like to have your opinion, please feel free to update the votes result by using the provided buttons.</h4>
                </li>
            </ul>
        </div>
    );
};

export default SingleRev;