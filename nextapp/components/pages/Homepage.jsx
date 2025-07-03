"use client";
 
import React, { useEffect, useState } from 'react'
import Header from "../common/Header";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase';
 
 const Homepage = () => {
  const name = "Madhavan";
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unfollow = onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
    return ()=>unfollow();
  }, [])
   console.log(user);

   const handleLogout= async()=>{
        await signOut(auth);
   }
   return (
     <div className='m-4'>
      <Header/>
      <div className='m-8'>
        {
          user &&(
            <div>
            <h1>welcome, {user.displayName}</h1>
            <button onClick={handleLogout} className='bg-red-600 text-black rounded px-4 py-2'>Logout</button>
            </div>
          )
        }

      </div>
       
     </div>
   )
 }
 
 export default Homepage
 

