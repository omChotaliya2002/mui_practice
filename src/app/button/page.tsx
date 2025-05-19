"use client";

import {Button} from "@mui/material";
import React from 'react';
import {IconButton} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import Link from "next/link";


const Page = () => {


      // for button 1 : 

      function showMsg() {

          alert("you've clicked me..")

      }


  // for button 2 : 
    const handleRefresh = () => {

            location.reload();

    }




  return (

<>    
  <div className="w-full h-full" style={{border:"0px solid black"}}>

      <div className="flex items-center justify-center mt-[100px] gap-7" style={{border:"0px solid black"}}>

           <Tooltip title="Show alert"
                slotProps={{
                  popper: {
                    modifiers: [{
                        name: 'offset',
                        options: {
                          offset: [-633, -210],
                        }
                      }],
                    },
                  }}>

                  <Button style={{color : "white"}} variant="contained" color="secondary" onClick={()=> showMsg()}> Click Me </Button>
          </Tooltip>


        <Tooltip title="Refresh"
                slotProps={{
                  popper: {
                    modifiers: [{
                        name: 'offset',
                        options: {
                          offset: [-745, -210],
                        }
                      }],
                    },
                  }}>

          <IconButton color="primary" aria-label="refresh" onClick={handleRefresh}>  
              <Refresh/>
          </IconButton>
        </Tooltip>

    </div>

</div>

      <div className="flex flex-row items-center justify-center mt-[140px] space-x-14">
          
        <Link href={"/"}>
            <button className="w-[140px] h-[40px] ring-[2px] ring-black bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:cursor-pointer active:bg-gray-400 transition-all delay-75"> &#x21d0; Prev. Page </button>
        </Link>

        <Link href={"/Grid"}>
            <button className="w-[140px] h-[40px] ring-[2px] ring-black bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:cursor-pointer active:bg-gray-400 transition-all delay-75"> Next Page &#x21d2; </button>
        </Link>
      </div>

</>
  )
}

export default Page;