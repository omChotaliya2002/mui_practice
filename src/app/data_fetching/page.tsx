"use client";
import React from 'react';

import Link from 'next/link';

const page = () => {


  return (


    <div className='flex flex-col items-center justify-center mt-[100px]'>
          <h1 className='text-2xl font-semibold underline underline-offset-[5px] mb-[50px]'> &#x21d2; Data fetching using Axios :   </h1>

      <Link className='text-xl font-semibold underline underline-offset-[5px] hover:scale-105 mb-[30px]' href={"/data_fetching/client"}> Data fetched by Client Component 👤 </Link>
      <Link className='text-xl font-semibold underline underline-offset-[5px] hover:scale-105' href={"/data_fetching/server"}> Data fetched by Server Component 💻 </Link>

    </div>
  )
}

export default page;