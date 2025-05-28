"use client";

import { useEffect, useState } from "react";


export default function BlinkingDots() {

    const [dotCount, setDotCount] = useState(0);

    useEffect(() => {


        const interval = setInterval(() => {
           setDotCount((prev)=> (prev+1) % 4);    // 0 to 3 dots
        }, 400);


        return ()=> clearInterval(interval);

    }, []);

    return (

        <span style={{display : "inline-flex", width : "3.2em", textAlign : "left"}}>

            {
                [0,1,2].map((i)=> (

                    <span key={i} style={{opacity : i<dotCount ? 1 : 0, transition : "opacity 0.2s ease-in-out"}}>
                         . </span>

                ))
            }
        </span>
    )
}