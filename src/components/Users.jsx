import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import "../css/all.css";
import filigree from"../css/filigree.png";

const Users = () => {
    const [users, setUsers] = useState ([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        window.scrollTo(0, 0)
        setIsLoading(true)
        fetch('https://gamers-parlour.herokuapp.com/api/users' )
        .then((response)=>{return response.json()})
        .then((data)=>{
            setUsers(data.allUsersUsernames)
            setIsLoading(false)
        })
    },[])

    if(isLoading)return <Spinner />

    return (
        <div className="users">
            <h2>Meet our reviewers</h2>
            <ul>
                {users.map((user)=>{
                    return(
                        <li className='users_listing' key={user.username}>
                            <h3><Link to = {`/users/${user.username}`} className="link">{user.username}</Link></h3>                            
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Users;