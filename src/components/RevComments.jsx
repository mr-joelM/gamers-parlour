import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import filigree from"../css/filigree.png";

const RevComments = () => {
    const [revComments, setRevComments] = useState([])
    const { review_id } = useParams(); 

    useEffect(()=>{
        fetch(`http://gamers-parlour.herokuapp.com/api/reviews/${review_id}/comments` )
        .then((response)=>{return response.json()})
        .then((data)=>{setRevComments(data.comments)})
    },[])

    console.log(revComments)
    if(revComments === undefined){
        return(
            <form className="revCom">
                <h3>No comments for this review yet.</h3>
                <h4>Please feel free to <Link to ={`/review/${review_id}/addComment`}>add a comment</Link> by clicking the link.</h4>
            </form>
        )
    }else{

    return (
        <form className="revCom">
            <h1>This is the Review comments page!</h1>
            <ul>
                {revComments.map((comment)=>{
                    return(
                        <form>
                            <li className='rev_com_list' key={comment.comment_id}>
                                <h3>"{comment.body}"</h3>                                
                                <h4>Made by: {comment.author}</h4>
                                <h4>Posted on: {comment.created_at}</h4>
                            </li>
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </form>
                    )
                })}                
                <h4>Please feel free to <Link to ={`/review/${review_id}/addComment`}>add a comment</Link> by clicking the link.</h4>
            </ul>
            
        </form>
    )};
};

export default RevComments;

