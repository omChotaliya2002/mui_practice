"use client"

import { Stack } from "@mui/material";

import {Typography} from "@mui/material";
import Link from "next/link";

export default function Home() {


  return (
<>
      <div className="flex flex-col items-center justify-center bg-white w-[300px] mt-[100px] mx-auto" style={{border:"1px solid white"}}>

          <h1 className="text-xl font-semibold text-black mb-[10px] mt-[20px]"> Stack </h1>

            <Stack spacing={2} direction="row" className="mb-[20px]">
                <div className="flex items-center justify-center w-[60px] h-[30px] rounded-sm text-gray-600 shadow-md text-sm select-none hover:cursor-pointer"> Item 1  </div>
                <div className="flex items-center justify-center w-[60px] h-[30px] rounded-sm text-gray-600 shadow-md text-sm select-none hover:cursor-pointer"> Item 2  </div>
                <div className="flex items-center justify-center w-[60px] h-[30px] rounded-sm text-gray-600 shadow-md text-sm select-none hover:cursor-pointer"> Item 3  </div>
            </Stack>

      </div>


      <div className="flex flex-col items-center justify-center mt-[30px] w-[320px] h-[120px] bg-white mx-auto" style={{border:"1px solid white"}}>

        <h1 className="text-xl font-semibold text-black mb-[10px]"> Typography </h1>

          <Typography variant="h6" component="h3" color="primary" align="center" gutterBottom>
              
              variant : h6 , color : primary & component : h3

          </Typography>

      </div>

      <div className="flex flex-row items-center justify-center mt-[30px] space-x-4">

        <Link href={"/button"}>
            <button className="w-[140px] h-[40px] ring-[2px] ring-black bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black active:bg-gray-400 transition-all delay-75 cursor-pointer"> 
                Next Page &#x21d2; </button>
        </Link>

      </div>

</>
    
  );
}
