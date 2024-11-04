import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination,Navigation  } from 'swiper/modules';



const Recommend = () => {
    const[books,setbooks] = useState([])
    useEffect(()=>{
        fetch("books.json").then((res)=> res.json()).then((data)=> setbooks(data))
    },[])

  
    


  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
        {/* Category filtering */}
     
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
          }
        }
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        
        {
            books.length && books.slice(8,18).map((book,index) => (
                <SwiperSlide   key={index}><BookCard  book={book} /></SwiperSlide>
                
            ))
        }
      </Swiper>
        
    </div>
   
  )
}

export default Recommend