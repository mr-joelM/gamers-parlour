import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import filigree from"../css/filigree.png";
import VotingButtonsCom from './VotingButtonsCom';
import {parseDate} from "../utils";


const RevComments = () => {
    const [revComments, setRevComments] = useState([])
    const [page, setPage] = useState(1)
    const { review_id } = useParams(); 

    useEffect(()=>{
        window.scrollTo(0, 0)
        fetch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}/comments?page=${page}`)
        .then((response)=>{return response.json()})
        .then((data)=>{setRevComments(data.comments)})
    },[review_id, page])

    //console.log(page)
    
    

    if(revComments === undefined){
        return(
            <form className="revCom">
                <h3>No comments for this review yet.</h3>
                <h4>Please feel free to <Link to ={`/review/${review_id}/addComment`}>add a comment</Link> by clicking the link.</h4>
            </form>
        )
    }else{

    return (
        <div className="revCom">
            <h1>This is the Review comments page!</h1>
            <ul>
                {revComments.map((comment, index)=>{
                    return(
                        <li key={comment.comment_id}>
                            <div className='rev_com_list' key={comment.comment_id}>
                                <h3>"{comment.body}"</h3>                                
                                <h4>Made by: {comment.author}</h4>
                                <h4>Posted on: {parseDate(comment.created_at)}</h4>
                                <h4>Current votes: {comment.votes}</h4>
                                {/* {console.log(comment.votes)} */}
                                <VotingButtonsCom review_id={review_id} index={index} setRevComments={setRevComments}/>
                            </div>
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </li>
                    )
                })}                
                <h4>Please feel free to <Link to ={`/review/${review_id}/addComment`}>add a comment</Link> by clicking the link.</h4>
            </ul>
            <section className="page_button">
                <button disabled={page === 1} onClick={() => setPage((cPage)=> cPage -1)}>{'<'} </button>
                     Page:{page} 
                <button onClick={() => setPage((cPage)=> cPage +1)}> {'>'}</button>
            </section> 
        </div>
    )};
};

export default RevComments;

