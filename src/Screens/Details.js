import React from 'react';
import  {useLocation,useNavigate} from "react-router-dom";
import "../Screens/Ecommpage.css"
const Details=()=>{
    const location = useLocation();
    console.log(">>",location.state.some)
return(
<>
<div className="ProductDetails">
        
    {
        location.state.some.map((ele)=>(
            <div className='ProductCard'>
                <div className='imgaeContainer'>
                    <img src={ele.images[0]} alt="img"/>
                </div>

                <div className="Productdetail"> 
                <div className='TitleContainer'>{ele.title}</div>
                <div className='PriceContainer'><span>Price </span><span>{ele.price}</span></div>
                <div className='BrandContainer'><span>Brand </span><span>{ele.brand}</span></div>
                <div className='PriceContainer'><span>Price </span><span>{ele.price}</span></div>
                <div className='RatingContainer'><span>Rating </span><span>{ele.Rating}</span></div>
                <div className='CategoryContainer'><span>Categofy </span><span>{ele.category}</span></div>
                <div className='DescriptionContainer'><span>Description </span><span>{ele.description}</span></div>
                </div>
           </div>
        
        
        
        ))
    }
    </div>


</>
    )
}

export default Details;