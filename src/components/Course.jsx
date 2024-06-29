import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { SERVER_URL } from '../utils/helper';
function Course() {
  
const [book, setBook] = useState([]);
useEffect(()=>{
  const getBook = async () =>{
    try{    
      const res =  await axios.get(SERVER_URL + "/book");
      setBook(res.data);
    }catch(error){
      console.log(error)
    }
  }
  getBook();
},[]);

  return (
    <div className='max-w-screen-2xl container mx-auto -mt-12 md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl pt-6 md:text-4xl'>
        We're delighted to have you {" "}
        <span className='text-pink-500'>Here!:)</span>
         </h1>
         <p className='mt-12'>
         Dive into a world where imagination knows no bounds, where each book opens a door to new adventures and insights. Explore our vast collection with ease, discovering hidden gems and beloved classics alike. Engage with fellow readers, share your thoughts, and uncover personalized recommendations tailored to your tastes. Whether you're seeking escapism, knowledge, or inspiration, our platform is here to guide you every step of the way. Embrace the joy of reading in all its forms—whether through the crisp pages of a paperback or the convenience of digital reading. At BookAppStore, we're committed to enriching your reading experience, fostering a community built on the love of literature. Thank you for choosing BookAppStore as your literary companion—we look forward to embarking on this adventure with you.
         </p>
         <Link to='/'>
         <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
         </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {book.map((item)=>{
          return <Card key={item._id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Course
