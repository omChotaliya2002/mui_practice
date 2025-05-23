"use client";

import React from 'react';
import { useState } from 'react';
import { api } from '../utils/api';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';


const page = () => {

    const [getRes, setGetRes] = useState<any>(null);
    const [getResStatus, setGetResStatus] = useState<any>(null);
    const [getResStText, setGetResStText] = useState<any>(null);

    const [postRes, setPostRes] = useState<any>(null);
    const [postResStatus, setPostResStatus] = useState<any>(null);
    const [postResStText, setPostResStText] = useState<any>(null);

    const [putRes, setPutRes] = useState<any>(null);
    const [putResStatus, setPutResStatus] = useState<any>(null);
    const [putResStText, setPutResStText] = useState<any>(null);

    const [patchRes, setPatchRes] = useState<any>(null);
    const [patchResStatus, setPatchResStatus] = useState<any>(null);
    const [patchResStText, setPatchResStText] = useState<any>(null);

    const [deleteRes, setDeleteRes] = useState<any>(null);
    const [deleteResStatus, setDeleteResStatus] = useState<any>(null);
    const [deleteResStText, setDeleteResStText] = useState<any>(null);

    const handleRequest = async() => {
    try{

        const getResponse = await api.get();
        setGetRes(getResponse.data.data);
        setGetResStatus(getResponse.status);
        setGetResStText(getResponse.data.statusText);
        console.log(getResponse);


        const postResponse = await api.post({name : "omi", email : "omi123@gmai.com"});
        setPostRes(postResponse.data.data);
        setPostResStatus(postResponse.status);
        setPostResStText(postResponse.data.statusText);

        const putResponse = await api.put({name : "omi updated"});
        setPutRes(putResponse.data.data);
        setPutResStatus(putResponse.status);
        setPutResStText(putResponse.data.statusText);

        const patchResponse = await api.patch({email : 'new@gmail.com'});
        setPatchRes(patchResponse.data.data);
        setPatchResStatus(patchResponse.status);
        setPatchResStText(patchResponse.data.data.statusText);
        // console.log(patchResponse);

        const deleteResponse = await api.delete();
        setDeleteRes(deleteResponse.data.data);
        setDeleteResStatus(deleteResponse.status);
        setDeleteResStText(deleteResponse.data.statusText);
    }
    catch(error){
        console.error("API error : ", error);
    }
};


  return (

<>
        <div className='flex items-center justify-center mt-[130px] mb-[50px]'>
                <Button variant='contained' sx={{bgcolor : green[500], width : 150, borderRadius : "8px", fontSize :"20px", fontWeight : "bold"}}
                  onClick={handleRequest}> Test API </Button>
        </div>

        <div className='flex flex-col items-center justify-center mt-[20px] mb-[100px]'> 

            <h1 className='text-xl underline underline-offset-[5px] mb-[20px]'> <strong> Get response </strong> </h1> 
            <p> <strong> Data : </strong>  {getRes && JSON.stringify(getRes)}  </p>
            <p> <strong> Status  : </strong>  {getRes && JSON.stringify(getResStatus)}  </p>
            <p> <strong> Status Text : </strong>  {getRes && JSON.stringify(getResStText)}  </p>
            <hr className='mt-[5px] w-full border'/>

            <h1 className='text-xl underline underline-offset-[5px] mb-[20px] mt-[20px]'> <strong> Post response </strong> </h1> 
            <p> <strong> Data : </strong>  {postRes && JSON.stringify(postRes)}  </p>
            <p> <strong> Status  : </strong>  {postRes && JSON.stringify(postResStatus)}  </p>
            <p> <strong> Status Text : </strong>  {postRes && JSON.stringify(postResStText)}  </p>
             <hr className='mt-[5px] w-full border'/>

            <h1 className='text-xl underline underline-offset-[5px] mb-[20px] mt-[20px]'> <strong> Put response </strong> </h1> 
            <p> <strong> Data : </strong>  {putRes && JSON.stringify(putRes)}  </p>
            <p> <strong> Status  : </strong>  {putRes && JSON.stringify(putResStatus)}  </p>
            <p> <strong> Status Text : </strong>  {putRes && JSON.stringify(putResStText)}  </p>
             <hr className='mt-[5px] w-full border'/>

            <h1 className='text-xl underline underline-offset-[5px] mb-[20px] mt-[20px]'> <strong> Patch response </strong> </h1> 
            <p> <strong> Data : </strong>  {patchRes && JSON.stringify(patchRes)}  </p>
            <p> <strong> Status  : </strong>  {patchRes && JSON.stringify(patchResStatus)}  </p>
            <p> <strong> Status Text : </strong>  {patchRes && JSON.stringify(patchResStText)}  </p>
             <hr className='mt-[5px] w-full border'/>

            <h1 className='text-xl underline underline-offset-[5px] mb-[20px] mt-[20px]'> <strong> Delete response </strong> </h1> 
            <p> <strong> Data : </strong>  {deleteRes && JSON.stringify(deleteRes)}  </p>
            <p> <strong> Status  : </strong>  {deleteRes && JSON.stringify(deleteResStatus)}  </p>
            <p> <strong> Status Text : </strong>  {deleteRes && JSON.stringify(deleteResStText)}  </p>
             <hr className='mt-[5px] w-full border'/>

        </div>

</>
  )
}

export default page;