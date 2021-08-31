import React from 'react';

const SingleRev = () => {
    return (
        <form>
            <ul>
                <li>
                    <h2>Review 1</h2>
                    <h3>body:</h3>
                    <h3>comments count:</h3>
                    <Link to ='/revComments'><h3>View all comments</h3></Link>
                    <Link to ='/addComment'><h3>Add a comment</h3></Link>
                </li>
            </ul>
        </form>
    );
};

export default SingleRev;