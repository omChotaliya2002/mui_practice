"use client";

// login credentials : 📌📌📌📌📌
// USERNAME : omdev
// PASSWORD : omdev123

import { IconButton, TextField } from "@mui/material";
import {Button} from "@mui/material";
import React, { useState } from "react";
import { AccountCircleOutlined, AccountCircleRounded, AccountCircleSharp } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Page = () => {


    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [unameError, setUnameError] = useState("");
    const [passError, setPassError] = useState("");

    const [unameBool, setunameBool] = useState(false);
    const [passBool, setpassBool] = useState(false);

    const router = useRouter();

    // SHOW / HIDE PASSWORD : 📌

    const [showPassword, setShowPassword] = useState(false);

    const handleClickedShowPassword = () => setShowPassword((show)=> !show);

    const handleMoouseDownPassword = (event : React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
    }

    const handleMoouseUpPassword = (event : React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
    }
    

    // FORM RELATED FUNCTIONALITY : 📌

    const handleUnameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
            setUnameError("");
    }

    const handlePassChange = (event : React.ChangeEvent<HTMLInputElement>) => {
            setPass(event.target.value);
            setPassError("");
    }

    const handleSubmit = (event : React.FormEvent) => {
            event.preventDefault();

            setunameBool(false);
            setpassBool(false);

            let isValid = true;


            if(name !== "omdev") {
                setUnameError("Invalid Username");
                isValid = false;
                setunameBool(true);
            }

            if(pass !== "omdev123") {
                setPassError("Invalid password");
                isValid = false;
                setpassBool(true);
            }

            if(isValid){
                alert(`${name}, you have successfully logged in!!`);
                router.push("/");
            }

            setName("");
            setPass("");
    }

    


  return (
<>

        <div className="flex items-center justify-center mt-[80px]">
            <h1 className="text-2xl font-semibold underline underline-offset-[7px]"> Login Form </h1>
        </div>

    <div className="flex flex-col w-[400px] h-[350px] mx-auto items-center justify-center mt-[30px] mb-[100px] gap-y-6" style={{border:"1px solid black"}}>


            <TextField id="username" variant="outlined" value={name} onChange={handleUnameChange} label="Username" type="name" error={unameBool}
                slotProps={{
                    input : {
                        startAdornment : (
                            <InputAdornment position="start">
                                    {/* <AccountCircleOutlined/> */}
                                    <AccountCircleRounded/>
                            </InputAdornment>
                        ),
                    }
                }}/>
            {unameError && <p className="text-red-500 font-semibold text-sm mt-[-20px]"> {unameError} </p>}


            <TextField id="password" variant="outlined" value={pass} onChange={handlePassChange} label="Password" type={showPassword ? "text" : "password"} error={passBool}
                slotProps={{
                    input : {
                        endAdornment : (
                            <InputAdornment position="end">

                                <IconButton aria-label={showPassword ? "hide password" : "show password"} onClick={handleClickedShowPassword}
                                    onMouseDown={handleMoouseDownPassword} onMouseUp={handleMoouseUpPassword} edge="end" size="small">

                                    {showPassword ? <VisibilityOff/> : <Visibility/>}

                                </IconButton>
                            </InputAdornment>
                        )
                      }
                   }}/>


            {passError && <p className="text-red-500 font-semibold text-sm mt-[-20px]"> {passError} </p>}
            
                <Button style={{marginTop : "20px"}} variant="contained" onClick={handleSubmit}> Login </Button>


    </div>
</>
  )
}

export default Page;    