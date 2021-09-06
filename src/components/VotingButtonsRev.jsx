import React, { useEffect, useState } from 'react';
import axios from 'axios';



const VotingButtons = ({ review_id, setSingleReview}) => {
    const [voting, setVoting]= useState (0)
   
    const UpdateVote = async () => {
        const { data } = await axios.patch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}`,{inc_votes: voting})
        return data
    }

    useEffect(()=>{
        if(voting !== 0){UpdateVote()
            .then((data)=>{
                setVoting(0)
            })}
        
    }, [voting])




    return (
        <div>
            <button className="decreaseButton" onClick={(event)=>{
                // update database
                setVoting(currVotes => currVotes - 1)
                setSingleReview(review=>{
                    const newReview={...review}
                    newReview.votes--
                    return newReview
                })
            }}> - </button>
            <button className="increaseButton" onClick={(event)=>{
                // update database
                setVoting(currVotes => currVotes + 1)
                setSingleReview(review=>{
                    const newReview={...review}
                    newReview.votes++
                    return newReview
                })
            }}> + </button>            
        </div>
    );
};

export default VotingButtons;