"use client";

import React from 'react';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BlinkingDots from '@/component/BlinkingDots';


const Page = () => {


    const [currentLine, setCurrentLine] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);


    const lines = ["Initializing Hacking",
                "Reading your files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"
            ];


    useEffect(() => {

        // if(currentLine >= lines.length) return;

        if(currentLine >= lines.length) {
            setCurrentLine(0);
            setDisplayText("");
            setCharIndex(0);
            return;
        }

        const line = lines[currentLine];

        if(charIndex < line.length) {

            const timeout = setTimeout(() => {
               
                setDisplayText((prev)=> prev + line[charIndex]);
                setCharIndex((prev)=> prev + 1);
            }, 50);                                  //typing speed📌

            return()=> clearTimeout(timeout);
        }
        else{

                // after full line types, wait 1.5s then go to next : 

                const timeout = setTimeout(() => {
                   
                    setCurrentLine((prev)=> prev + 1);
                    setDisplayText("");
                    setCharIndex(0);
                }, 2500);

            return ()=> clearTimeout(timeout);
        }
      
    }, [charIndex, currentLine]);
    
    

  return (


    <div className='w-full h-[47.4vh] bg-black p-4 flex items-center justify-center'>
        <Typography fontFamily={"var(--font-op)"} sx={{color : "#4CBB17", fontSize : "20px"}}> 
           {displayText}
           {charIndex >= lines[currentLine]?.length && <BlinkingDots/>}  
        </Typography>

    </div>


  )
}

export default Page;