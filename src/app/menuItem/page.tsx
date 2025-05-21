"use client";

import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { PersonAdd, Logout, AnchorRounded } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { Purple_Purse } from 'next/font/google';

const Page = () => {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event : React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }


  return (
<>

    <div className='flex items-center justify-center mt-[100px]'>

        <Tooltip title = "Account Settings">

            <IconButton onClick={handleClick} size='small'>

                <Avatar sx={{fontSize : "25px", bgcolor : purple[500]}} style={{textAlign : "center"}}> O </Avatar>

            </IconButton>

        </Tooltip>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}
        slotProps={{
            paper : {
                elevation : 4,
                sx : {
                    mt : 1.5,
                    overflow : "visible",
                    filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.15))',
                    minWidth : 200,
                    '& .MuiAvatar-root': {
                        width: 24,
                        height: 24,
                        mr: 1.5,
                    },
                     '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 18,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                }
            },
        }}
            // The menu will be anchored to the bottom-right corner of the avatar button.
            transformOrigin={{ horizontal: 'center', vertical : 'bottom'}}
             anchorOrigin={{ horizontal: 'center' , vertical : 'bottom' }}
        >

            <MenuItem>

                <Avatar/> Profile

            </MenuItem>

        </Menu>

    </div>

</>

  )
}

export default Page;