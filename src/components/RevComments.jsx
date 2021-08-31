import React from 'react';

const RevComments = () => {
    return (
        <form>
            <ul>
                <li>
                    <h2>Author: jessjelly</h2>
                    <h3>Posted: </h3>
                    <h3>Votes: 3</h3>
                    <h3>Body: "Quis duis mollit ad enim deserunt."</h3>
                </li>
                <li>
                    <h2>Author: cooljmessy</h2>
                    <h3>Posted: </h3>
                    <h3>Votes: 25</h3>
                    <h3>Body: "Laboris nostrud ea ex occaecat aute quis consectetur anim."</h3>
                </li>
                <li>
                    <h2>Author: weegembump</h2>
                    <h3>Posted: </h3>
                    <h3>Votes: 7</h3>
                    <h3>Body: "Consequat nisi dolor nulla esse sunt eu ipsum laborum deserunt duis. Ffugiat sint et proident ex do consequat est. Nisi minim laboris mollit cupidatat?"</h3>
                </li>
                <Link to ='/addComment'><h3>Add a comment</h3></Link>
            </ul>
            
        </form>
    );
};

export default RevComments;