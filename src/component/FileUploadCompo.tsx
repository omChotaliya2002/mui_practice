"use client";  

// CHILD COMPONENT : 👶


import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CloudUpload } from "@mui/icons-material";


interface FileUploadProps {
    onFileSelect : (file : File | null) => void;      // this will remove the file name when reset 👍
    accept?: string;
}

export type FileUploadHandle = {
    reset : () => void;
}


// Forward ref so parent can call reset : 📌📌📌


const FileUploadComponent = forwardRef(function FileUploadComponent(
    {onFileSelect, accept = "*"} : FileUploadProps,
    ref : React.Ref<{reset : ()=> void}>
) {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>("");

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {

            const file = event.target.files?.[0];

            if(file){
                setFileName(file.name);
                onFileSelect(file);
            }
        };


        // ✅ Expose reset method in parent : 📌📌📌

        useImperativeHandle(ref, () => ({

            reset : () => {

                setFileName("");

                if(fileInputRef.current){
                    fileInputRef.current.value = "";        //Clear file input 👍
                }

                onFileSelect(null);     //Reset parent state 👍
            },
        }));



        return(

            <>
            
                <input ref={fileInputRef} type="file" accept={accept} style={{display : "none"}} onChange={handleFileChange}/> 

                <Button component = "label" role={undefined} onClick={handleClick} startIcon = {<CloudUpload/>} variant="contained"
                    sx={{marginTop : "20px", width : "200px"}}>
                    Upload files 
                 </Button>

                {fileName && <Typography mt={1}> Selected : {fileName}  </Typography>}
            </>
        );
});

export default FileUploadComponent;