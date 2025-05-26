"use client";
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

type Post = {
  id : number;
  quote : string;
  author : string;
}


const Page = () => {


  const [posts, setPosts] = useState<Post[]>([])


  useEffect(() => {
    
      axios.get("https://dummyjson.com/quotes")
      .then(res => setPosts(res.data.quotes))
      .catch(err => console.error(err));

  }, []);
  


  return (


    <div className='flex flex-col items-center justify-center mt-[100px] mb-[80px]'>

        <h1 className='text-2xl font-mono'> <strong> ✍Quotes that will make your day..!🌞 </strong> </h1> 
            

            {
              posts.map((post => (
              <>
                <div className='flex flex-col items-center justify-center space-y-1.5 w-[800px] mt-[40px] mb-[20px]' style={{border: "0px solid black"}}>

                  <h1 className='text-lg'> Id : <strong> {post.id} </strong> </h1> 
                  <p className='font-mono text-center mb-[10px]' style={{border : "0px solid black"}}> <strong> "{post.quote}" </strong> </p>
                  <p> Author : <strong className='underline underline-offset-[5px]'> {post.author} </strong> </p>

                </div>
                  <hr className='border border-black w-full'/>
              </>

              )))
            }
      

    </div>
  )
}

export default Page;