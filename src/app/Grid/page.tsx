"use client";

import {Grid}  from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import React from 'react';

const Page: React.FC = () => {


    // const MyPaper = styled(Paper)(({theme}) => ({

    //     width : 120,
    //     height : 120,
    //     textAlign : "center",
    //     padding : theme.spacing(2),

    // }))

    
  return (
<>

<div className="bg-gray-300 h-[200px] mt-[100px]" style={{border:"1px solid black"}}>

    <Grid container spacing={2} className = "flex items-center justify-center mt-[60px] p-2">


            <Grid size={{xs : 2, sm : 4, md : 6, lg : 8, xl : 10 }}>
                <Paper sx={{textAlign: "center"}}> I am responsive Grid </Paper>
            </Grid>
            
            <Grid size={2}>
                <Paper sx={{textAlign:"center"}}> 2 </Paper>
            </Grid>

            <Grid size={2}>
                <Paper sx={{textAlign:"center"}}> 3 </Paper>
            </Grid>

            <Grid size={{xs : 2, sm : 4, md : 6, lg : 8, xl : 10 }}>
                <Paper sx={{textAlign: "center"}}> I am responsive Grid </Paper>
            </Grid>

    </Grid>
</div>

    <div className="flex flex-row items-center justify-center mt-[140px] space-x-14">

        <Link href={"/button"}>
            <button className="w-[140px] h-[40px] ring-[2px] ring-black bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:cursor-pointer active:bg-gray-400 transition-all delay-75"> &#x21d0; Prev. Page </button>
        </Link>

        <Link href={"/card"}>
            <button className="w-[140px] h-[40px] ring-[2px] ring-black bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:cursor-pointer active:bg-gray-400 transition-all delay-75"> Next Page &#x21d2; </button>
        </Link>
      </div>

</>
  )
}

export default Page;