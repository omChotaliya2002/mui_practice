"use client";

import {Button} from "@mui/material";
import React from 'react';
import {IconButton} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import Link from "next/link";


const Page = () => {


      // for button 1 : 

      function showMsg(): void {

          alert("you've clicked me..")

      }


  // for button 2 : 
    const handleRefresh = (): void => {

            location.reload();

    }




  return (

<>    
  <div className="w-full h-full" style={{border:"0px solid black"}}>

      <div className="flex items-center justify-center mt-[140px] gap-7" style={{border:"0px solid black"}}>

           <Tooltip title="Show alert"
                slotProps={{
                  popper: {
                    modifiers: [{
                        name: 'offset',
                        options: {
                          // offset: [-633, -210],
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
                          // offset: [-745, -210],
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

</>
  )
}

export default Page;