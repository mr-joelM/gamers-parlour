import axios from 'axios';

const VotingButtonsCom = ({comment_id, setRevComments}) => {
    

    const UpdateVote = async (vote) => {
         await axios.patch(`https://gamers-parlour.herokuapp.com/api/comments/${comment_id}`,{inc_votes: vote})
          .then((response)=>{
             
            
            const {updatedComment} = response.data
            setRevComments(comments=>{
             const newComments=comments.map((comment)=>{
                if(comment.comment_id === comment_id){
                    comment.votes = updatedComment.votes
                }
                return comment
            })
             return newComments
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

export default VotingButtonsCom;