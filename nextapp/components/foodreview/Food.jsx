"use client"
import { db } from '@/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Food = () => {
   
    const [reviews, setReviews] =useState([]);
    const [newReview,setNewReview] = useState({food:"", price:"", resName:"", rating:0, review:""})

    const fetchReview = async()=>{
  const querysnapshot = await getDocs(collection(db, "review"))

  const reviewData = querysnapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data(),
  }))

  setReviews(reviewData);

}


    const addReview = async()=>{
      await addDoc(collection(db,"review"),{
        food:newReview.food,
        price:newReview.price,
        resName:newReview.resName,
        rating:newReview.rating,
        review:newReview.review,
        createAt: new Date().toISOString(),
       })

       setNewReview({food:"", price:"", resName:"", rating:0, review:""})

       fetchReview();
    }

    useEffect(()=>{
    fetchReview()
  },[]);

  console.log(reviews)
  return (
    <div className='m-8'>
      <div>
        <h1 className='text-2xl font-semibold mb-5 text-orange-500'>FOOD REVIEW</h1>
        <div className='max-w-md flex flex-col gap-3'>
            <input type="text" placeholder='Food Name' className='p-3 border border-sky-400 rounded' value={newReview.food} onChange={(e)=>setNewReview({...newReview, food:e.target.value})}/>
            <input type="text" placeholder='Price' className='p-3 border border-sky-400 rounded' value={newReview.price} onChange={(e)=>setNewReview({...newReview, price:e.target.value})}/>
            <input type="text" placeholder='Resturant Name' className='p-3 border border-sky-400 rounded' value={newReview.resName} onChange={(e)=>setNewReview({...newReview, resName:e.target.value})}/>
            <input type="number" placeholder='Rating' className='p-3 border border-sky-400 rounded' value={newReview.rating} onChange={(e)=>setNewReview({...newReview, rating:e.target.value})}/>
            <textarea placeholder='Review' className='p-3 border border-sky-400 rounded' value={newReview.review} onChange={(e)=>setNewReview({...newReview, review:e.target.value})}></textarea>
            <button className='bg-purple-400 flex items-center justify-center py-3 gap-3 text-black rounded cursor-poniter' onClick={addReview}><PlusIcon className='w-4'/> Add Review</button>
        </div>
      </div>

<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3'>

  {
    reviews.map((review)=>(
      <div key={review.id} className='flex flex-col gap-2 border max-w-sm m-5 p-5 rounded-'>
        <span>Food: {review.food}</span>
        <span>Price: {review.price}</span>
        <span>Resturant Name: {review.resName}</span>
        <span>Rating: {review.rating}</span>
        <span>Review: {review.review}</span>
      </div>
    ))
  }
</div>

    </div>
  )
}

export default Food
