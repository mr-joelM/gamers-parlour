import {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'; 
import "../css/all.css";
import filigree from"../css/filigree.png";

const Categories = () => {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        fetch('http://gamers-parlour.herokuapp.com/api/categories' )
        .then((response)=>{return response.json()})
        .then((data)=>{setCats(data.categories)})
    },[])

    return (
        <form className="categories">
            <h2>This is the category page!!</h2>
            <ul>
                {cats.map((category)=>{
                    return(
                        <form>
                            <li className='cats_listing' key={category.slug}>
                                <h2><Link to = {`/reviews?category=${category.slug}`}>{category.slug}</Link></h2>
                                <h4>"{category.description}"</h4>
                            </li>
                            <img className='filigree_img' src={filigree} alt="decorative filigree"/>
                        </form>
                    )
                })}
            </ul>            
        </form>
    );
};

export default Categories;