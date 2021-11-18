import axios from 'axios';

const VotingButtons = ({ review_id, setSingleReview}) => {
   
    const UpdateVote = async (vote) => {
         await axios.patch(`https://gamers-parlour.herokuapp.com/api/reviews/${review_id}`,{inc_votes: vote})
        .then(()=>{
            setSingleReview(review=>{
                const newReview={...review}
                newReview.votes+= vote
                return newReview
            })
        })
    }

    return (
        <div>
            <button className="decreaseButton" onClick={(event)=>{UpdateVote(-1)}}> - </button>
            <button className="increaseButton" onClick={(event)=>{UpdateVote(+1)}}> + </button>            
        </div>
    );
};

export default VotingButtons;