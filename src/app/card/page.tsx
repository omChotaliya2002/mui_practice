"use client";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Share from "@mui/icons-material/Share";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVert from "@mui/icons-material/MoreVert";
import green from "@mui/material/colors/green";
import red from "@mui/material/colors/red";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Link from "next/link";



const Page = () => {

        // document.body.style.backgroundColor = "black";

    const [isLiked, setIsLiked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {

        setIsLiked(!isLiked);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false),200);
    }



  return (

<>

    {/* <div className="flex items-center justify-center mt-[100px]" style={{border:"1px solid black"}}> */}
        <Card sx={{maxWidth : 400, border : "1px solid black", backgroundColor : "white", borderRadius : "10px", '&:hover' : {border : "1.5px solid black"}}} className="mx-auto mt-[100px] mb-[100px]">

            <CardHeader
                
                avatar = {
                    <Avatar sx={{bgcolor : green[700]}}>
                        O
                    </Avatar>
                }

                action = {
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                }
                title= "Indian Delicious Sweets"
                subheader = "May 17, 2025"
            />

            <CardMedia
                component="img"
                image="/images/sweets.png"
                alt="sweets" sx={{height : "250px"}}/>

            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{border:"0px solid black"}} className="px-2">
                    Indian sweets 'mithai' offer diverse, rich flavors and textures, often featuring milk, sugar, and nuts. From syrupy gulab jamuns to fudgy barfis, they're key to celebrations and daily treats.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>

              <IconButton aria-label="add to favourites" onClick={handleClick}>

                {
                    isLiked ? (
                        <Favorite sx={{color : isLiked ? red[700]  : "color.secondary", transform : isAnimating && isLiked ? "scale(1.2)" : "scale(1)" , transition : "color 0.1s ease-in-out, transform 0.05s ease-out", fontSize : "30px"}} />
                    ) : (

                        <FavoriteBorder sx={{color : "color.secondary", transform : isAnimating && isLiked ? "scale(1.2)" : "scale(1)" , transition : "color 0.1s ease-in-out, transform 0.05s ease-out", fontSize : "30px"}} />
                    )
                }

              </IconButton>

              <IconButton>
                    <Share/>
              </IconButton>

              <IconButton className="left-[258px]">
                    <ExpandMore/>
                </IconButton>
            </CardActions>
        </Card>
      
    {/* </div> */}
</>

  )
}

export default Page;