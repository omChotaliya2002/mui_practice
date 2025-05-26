
import axios from 'axios';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';


type Post = {
  id : number;
  name : string;
  image : StaticImageData;
}


    async function fetchPosts(): Promise<Post[]> {

        const res = await axios.get("https://dummyjson.com/recipes");
        return res.data.recipes;

    }

    export default async function ServerPage() {


        const posts = await fetchPosts();

        return(

          <>   


                <div className= "relative flex h-[200px] items-center justify-center mt-[65px] w-full" style={{border : "0px solid black"}}>  

                  <div className='absolute inset-0 h-full w-full bg-cover bg-no-repeat]' style={{backgroundImage : "url('/images/food.jpg')", backgroundPosition : "20% 13%" ,border : "1px solid red"}}>
                  </div>

                </div>
                

                  <div className='z-20 flex flex-wrap items-center justify-center mt-[60px] gap-x-14 gap-y-10'>

                  {
                    posts.map((post => (

                   
                      <div key={post.id} className='flex flex-col items-center justify-center mb-[20px] hover:underline hover:underline-offset-[5px] hover:transition-all hover:delay-100'>


                          <Image className='mb-[20px] rounded-xl hover:shadow-[0_8px_15px_3px_rgba(0,0,0,0.4)] hover:scale-95 border-[1.5px] border-gray-600 hover:transition-all hover:delay-150 hover:cursor-pointer'
                             src={post.image} alt='Image' height={210} width={210}/>

                           <p className='font-semibold text-[15px] text-center' style={{border : "0px solid black"}}> {post.name} </p>

                      </div>



                    )))
                  }

                </div>

          </>

        )

    }