import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom'; 
import "../css/all.css";

const SingleUser = () => {
    const [singleUser, setSingleUser] = useState({})
    const { username } = useParams(); 

    useEffect(()=>{
        window.scrollTo(0, 0)
        fetch(`https://gamers-parlour.herokuapp.com/api/users/${username}` )
        .then((response)=>{return response.json()})
        .then((data)=>{setSingleUser(data.user)})
    },[])

    return (
        <div className="singleUser">
            <h1>This is the single user page!!</h1>
            <ul>
                <li className='user' key={singleUser.username}>
                    <h2>{singleUser.name}</h2>
                    <h3>Aka: "{singleUser.username}"</h3>                    
                    <img className='user_avatar' src={singleUser.avatar_url} alt={singleUser.username}/>                    
                </li>
            </ul>                 
        </div>
    );
};

export default SingleUser;