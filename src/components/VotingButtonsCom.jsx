import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VotingButtonsCom = ({review_id, index, setRevComments}) => {
    const [voting, setVoting]= useState (0)

    const UpdateVote = async () => {
        const { data } = await axios.patch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}/comments`,{inc_votes: voting})
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
                setRevComments(comment=>{
                    const newComment=[...comment]
                    newComment[index].votes-=0.5
                    //console.log(newComment[index].votes)
                    return newComment
                })
            }}> - </button>
            <button className="increaseButton" onClick={(event)=>{
                // update database
                setVoting(currVotes => currVotes + 1)
                setRevComments(comment=>{
                    const newComment=[...comment]
                    newComment[index].votes+=0.5
                    //console.log(newComment[index].votes)
                    return newComment
                })
            }}> + </button>            
        </div>
    );
};

export default VotingButtonsCom;