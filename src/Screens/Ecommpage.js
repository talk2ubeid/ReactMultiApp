import React,{useState,useEffect} from "react";
import axios from "axios";
import "../Screens/Ecommpage.css"
import {useNavigate } from "react-router-dom"

const Ecommpage = () => {
    const navigate=useNavigate();
    const [data,setData]=useState([])

    useEffect(()=>{getApi();},[])

    const getApi=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        setData(response.data.products)
    }

    const handlesendData=(ele)=>{
      console.log("Button Clicked",ele)  
      navigate("/Details",{state:{some:[ele]}})
    }

  return (
    <>
        <div className="MainCard">
        {data.map((ele,id)=>(
            <div className="CardContainer" onClick={()=>handlesendData(ele)}>
                <div className="ImageContainer">
                    <img src={ele.images[0]} alt="emage"/>
                </div>
                <div className="TextContainer">
                    <p>{ele.title}</p>
                    <p>{ele.price}</p>
                    <p>{ele.Rating}</p>
                    <p>{ele.description}</p>
                    
                </div>
                <div className="ButttonContainer"><button className="ButtonStyle" >Click To Know More</button></div>
            
                
            </div>
        ))}

        </div>
    </>
  );
};

export default Ecommpage;
