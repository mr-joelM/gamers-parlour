import {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'; 
import Spinner from './Spinner';
import "../css/all.css";
import filigree from"../css/filigree.png";

const Categories = () => {
    const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://gamers-parlour.herokuapp.com/api/categories' )
        .then((response)=>{return response.json()})
        .then((data)=>{
            setCats(data.categories)
            setIsLoading(false)
        })
    },[])

    window.scrollTo(0, 0)

    if(isLoading)return <Spinner />

    return (
        <div className="categories">
            <h2>Choose a category</h2>
            <ul>
                {cats.map((category)=>{
                    return(
                        <li key={category.slug}>
                            <div className='cats_listing' key={category.slug}>
                                <h3><Link to = {`/reviews/${category.slug}`} className="link">{category.slug}</Link></h3>
                                <h4>"{category.description}"</h4>
                            </div>
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </li>
                    )
                })}
            </ul>            
        </div>
    );
};

export default Categories;