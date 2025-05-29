"use client";

import { useState } from "react";
import { Home, TableChart, Article, Api, ListAlt } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Dehaze } from "@mui/icons-material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { Gamepad } from "@mui/icons-material";
import Image from "next/image";

import Menu from "../component/Menu";

const drawerWidth = 240;

interface Props{
  window?: () => Window;
}

const Page = ({window} : Props) => {

  const [drawerOpen, setDrawerOpen] = useState(false);


    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
      {text : 'Home', icon : <Home/>, path : "/home"},
      {text : 'Button', icon : <Gamepad/>, path : "/button"},
      {text : 'Grid', icon : <TableChart/>, path : "/Grid"},
      {text : 'Card', icon : <Article/>, path : "/card"},
      {text : 'APIs', icon : <Api/>, path : "/res"},
      {text : 'Axios', icon : <ListAlt/>, path : "/data_fetching"},

      {text : 'Excel Processor', 
        icon : (
          <Image className="mt-[-5px]" src={"/images/excel.svg"} alt="Excel" height={20} width={20}/>
        ) , 
        path : "/xlsx"},
    ]

    const drawer = (
      <div>

          <Toolbar style={{height : "150px", backgroundColor : "#e5e4e2"}}>

            <Image className="mx-7" src={"/images/logo.png"} alt="Web World" height={130} width={130}/>
 
          </Toolbar>

          <Divider style={{border : "1.5px solid #d3d3d3"}}/>

          <List style={{marginTop : "20px",border: "0px solid black"}}>
              {
                menuItems.map((item)=> (

                    <ListItem key={item.text} style={{border : "0px solid black"}}>
                    
                      <Link href={item.path} onClick={()=> setDrawerOpen(false)} className="flex flex-row space-x-2 hover:scale-104">
                        <ListItemIcon style={{border : "0px solid black", minWidth : "10px", marginTop : "3.5px"}}>  {item.icon} </ListItemIcon>
                         <ListItemText className="" style={{border : "0px solid black"}} primary = {item.text}/>
                      </Link>

                    </ListItem> 
                ))
              }
          </List>

      </div>
    )

    // container =====================📌 : 

    const container = window !== undefined ? ()=> window().document.body : undefined;


  return (

<div className="w-full h-full" style={{border:"0px solid black"}}>

    <CssBaseline/>

    <AppBar position="fixed" style={{border:"0px solid yellow"}}>

      <Toolbar style={{border : "0px solid red"}}>

          <IconButton color="inherit" aria-label="open drawer" edge = "start" onClick={handleDrawerToggle}
          sx={{transform : drawerOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition : drawerOpen ? '' : 'transform 0.3s ease-in-out'}}>
                <Dehaze fontSize="small"/>
          </IconButton>

    <div className="flex items-center justify-between w-full" style={{border : "0px solid white"}}> 


      <Link href={"/"} style={{border: "0px solid white"}}>
          <Typography sx={{fontWeight : "bold", width : "160px" , marginLeft : "10px"}}>
              Web World
          </Typography>
      </Link>

          <Menu/>

    </div>

      </Toolbar>
    </AppBar>


  <Box component="nav">
    
     <Drawer
          variant="temporary" container={container}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            transition : "transform 0.1s ease-in-out",
          }}
          open = {drawerOpen} onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
  </Box>

  </div>

  )
}

export default Page;