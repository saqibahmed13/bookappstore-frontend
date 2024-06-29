import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Card from './Card';
import {useEffect} from 'react';
import { SERVER_URL } from '../utils/helper';


function Freebooks() {

const [book, setBook] = useState([]);
useEffect(()=>{
  const getBook = async () =>{
    try{
      const res = await axios.get(SERVER_URL + "/book");
      const data = res.data.filter((data)=>data.category==="Free");
      setBook(data);
    }catch(error){
      console.log(error)
    }
  }
  getBook();
},[]);


var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] }
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2 '>Free Offered Courses</h1>
      <p>Discover, explore, and immerse yourself in a world of literature with BookAppStore, where every page opens a new adventure.</p>
    </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
          <Card item={item} key={item._id}/>  // card k ander jo item hai item = {usme yeh value daldalo}
        ))}
      </Slider>
        
    </div>
    </div>
    </>

  )
}   

export default Freebooks
