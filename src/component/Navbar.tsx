"use client";

import { useState } from "react";
import { Home, PersonAddAlt1, TableChart, Article } from "@mui/icons-material";
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


const drawerWidth = 240;

interface Props{
  window?: () => Window;
  children : React.ReactNode;
}

const Page = ({window, children} : Props) => {

  const [drawerOpen, setDrawerOpen] = useState(false);


    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
      {text : 'Home', icon : <Home/>, path : "/"},
      {text : 'Add User', icon : <PersonAddAlt1/>, path : "/radioButton"},
      {text : 'Button', icon : <Gamepad/>, path : "/button"},
      {text : 'Grid', icon : <TableChart/>, path : "/Grid"},
      {text : 'Card', icon : <Article/>, path : "/card"},
    ]

    const drawer = (
      <div>

          <Toolbar/>
          <Divider/>

          <List>
              {
                menuItems.map((item)=> (

                    <ListItem key={item.text} style={{border : "0px solid black"}}>
                    
                      <Link href={item.path} onClick={()=> setDrawerOpen(false)} className="flex flex-row space-x-2 hover:scale-105">
                        <ListItemIcon style={{border : "0px solid black", minWidth : "10px"}}>  {item.icon} </ListItemIcon>
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

      <Toolbar>

          <IconButton color="inherit" aria-label="open drawer" edge = "start" onClick={handleDrawerToggle}
          sx={{transform : drawerOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition : drawerOpen ? '' : 'transform 0.3s ease-in-out'}}>
                <Dehaze fontSize="small"/>
          </IconButton>

      <Link href={"/"}>
          <Typography sx={{fontWeight : "bold", marginLeft : "10px"}}>
              Material UI Practice
          </Typography>
      </Link>


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