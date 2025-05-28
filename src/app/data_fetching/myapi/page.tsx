"use client";

import React from 'react';

const fetchProtectedData = async () => {

    const res = await fetch("/myapi/protected", {
        method : "GET",
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        },
        cache : "no-store",
    });


    const data = await res.json();
    // console.log(data);

}



const page = () => {


  return (

    <div className='flex items-center justify-center mt-[200px]'>
        <button className='hover:cursor-pointer font-semibold text-lg rounded-xl w-[180px] h-[40px] bg-black text-white border-2 border-black hover:bg-white hover:text-black active:bg-gray-200' 
           onClick={fetchProtectedData}> Fetch </button> 
    </div>
    
  )
}

export default page;