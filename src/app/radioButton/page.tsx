"use client";

import  Radio  from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextField  from "@mui/material/TextField";
import { useRouter } from "next/navigation";


const page = () => {


    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [error, setError] = useState(false);

    const router = useRouter();

    const handleSubmit = (event : React.FormEvent) => {

        event.preventDefault();

        // let isValid = false;

        if(password !== confPassword){
            // isValid = false;
            alert("password and confirm password must be same.");
            setPassword("");
            setConfPassword("");
            return;     // stop further execution
        }

        if(!name || !gender || !email || !contact || !password || !confPassword){
            // isValid = false;
             setError(true);
             return;
        }
        else{
           setError(false);
        //    isValid = true;
            const data = localStorage.setItem("userData", `Name : ${name}, Gender : ${gender}, Email : ${email}, Contact : ${contact}, Password : ${password}, Confirm password : ${confPassword} `);
        }

        setName("");
        setGender("");
        setEmail("");
        setContact("");
        setPassword("");
        setConfPassword("");

        
            router.push("/textFields");   

        // router.push("textFields");

    }



  return (
<>

<form onSubmit={handleSubmit}>

    <div className="flex items-center justify-center mt-[80px]">
        <h1 className="text-3xl font-semibold underline underline-offset-[7px]"> Regestration Form </h1>
    </div>

    
    <div className="flex flex-col items-center justify-center h-[600px] w-[500px] mt-[40px] mb-[100px] select-none gap-y-4 mx-auto hover:rounded-xl" 
        style={{border:"1px solid black"}}>
    
            <TextField value={name} label="Name" size="small" onChange={(e)=> setName(e.target.value)}
                // slotProps={{inputLabel : {shrink : true}}}
                sx={{width : "60%"}}/>
            {error && <p className="font-semibold text-xs text-red-500 mt-[-10px]"> * This field is required </p>}


    <div className="flex flex-row space-x-4 items-center justify-center" style={{border:"0px solid black"}}>

            <p className="font-semibold"> Gender :  </p>  

        <RadioGroup row name="radio-button-group" value={gender} onChange={(e) => setGender(e.target.value)}>

            <FormControlLabel value="female" control={<Radio/>} label="Female"/> 
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>  
            <FormControlLabel value="trans" control={<Radio/>} label="Trans"/>   

        </RadioGroup>
    </div>
         {error && <p className="font-semibold text-xs text-red-500 mt-[-15px]"> * This field is required </p>}


            <TextField value={email} label="Email" type="email" size="small" onChange={(e)=> setEmail(e.target.value)}
                sx={{width : "60%"}}/>
                 {error && <p className="font-semibold text-sm text-red-500 mt-[-10px]"> * This field is required </p>}


            <TextField value={contact} label="Phone" type="tel" size="small" onChange={(e)=> setContact(e.target.value)}
                sx={{width : "60%"}} />
                 {error && <p className="font-semibold text-xs text-red-500 mt-[-10px]"> * This field is required </p>}


            <TextField value={password} label="password" type="password" size="small" onChange={(e)=> setPassword(e.target.value)}
                sx={{width : "60%"}} />
                 {error && <p className="font-semibold text-xs text-red-500 mt-[-10px]"> * This field is required </p>}


            <TextField value={confPassword} label="Confirm password" type="password" size="small" onChange={(e)=> setConfPassword(e.target.value)}
                sx={{width : "60%"}} />
                 {error && <p className="font-semibold text-xs text-red-500 mt-[-10px]"> * This field is required </p>}


            <Button variant="contained" color="primary" type="submit" size="medium" className="top-[10px]" sx={{width:"30%"}}> Submit </Button>
            
    </div>
</form>


    </>
  )
}

export default page;