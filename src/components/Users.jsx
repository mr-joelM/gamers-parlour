import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/all.css";
import filigree from"../css/filigree.png";

const Users = () => {
    const [users, setUsers] = useState ([])

    useEffect(()=>{
        fetch('http://gamers-parlour.herokuapp.com/api/users' )
        .then((response)=>{return response.json()})
        .then((data)=>{setUsers(data.allUsersUsernames)})
    },[])

    return (
        <div className="users">
            <h1>This is the Users page !!</h1>
            <ul>
                {users.map((user)=>{
                    return(
                        <li className='users_listing' key={user.username}>
                            <h2><Link to = {`/users/${user.username}`}>{user.username}</Link></h2>                            
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Users;