"use client";

import React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { PersonAdd, Logout, AnchorRounded } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import Link from 'next/link';

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

    <div className='flex items-center justify-center'>

        <Tooltip title = "Account Settings">

            <IconButton onClick={handleClick} size='small'>

                <Avatar className='font-medium' sx={{fontSize : "22px", bgcolor : purple[500], width : 36, height : 36}} style={{textAlign : "center"}}> O </Avatar>

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
            anchorOrigin={{ horizontal: 'right' , vertical : 'bottom' }}
            transformOrigin={{ horizontal: 'right', vertical : 'top'}}>

        <Link href={"https://myaccount.google.com/personal-info?utm_source=chrome-profile-chooser"}>
            <MenuItem>
                <Avatar/> Profile
            </MenuItem>
        </Link>

        <Link href={"https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1"}>
            <MenuItem>
                <Avatar/> My Account
            </MenuItem>
        </Link>

            <Divider sx={{marginTop : "8px", marginBottom : "8px"}}/>

        <Link href={"https://accounts.google.com/v3/signin/accountchooser?service=CPanel&flowName=GlifWebSignIn&flowEntry=AccountChooser&dsh=S-922506838%3A1747890275143543"}>
            <MenuItem>
                <ListItemIcon>
                    <PersonAdd/>
                </ListItemIcon>
                Add another account
            </MenuItem>
        </Link>

        <Link href={"/textFields"}> 
            <MenuItem>
                <ListItemIcon>
                    <Logout/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </Link>

        </Menu>

    </div>

</>

  )
}

export default Page;