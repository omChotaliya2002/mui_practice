"use client";

// PARENT COMPONENT 👪


import React, { useState, useRef } from "react";
import * as XLSX from 'xlsx';
import Button from "@mui/material/Button";
import { ChangeCircle, RestartAlt } from "@mui/icons-material";
import FileUploadComponent, { FileUploadHandle } from "@/component/FileUploadCompo";



export default function ExcelUploadPage() {

    const [data, setData] = useState<any[][]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Refs to control child component reset :  📌

    const uploadRef = useRef<FileUploadHandle>(null);


    const handleFileUpload = (file : File | null) => {        // this will remove the file name when reset 👍

            setSelectedFile(file);
    }

    const handleProcess = () => {

        if(!selectedFile) return;

        const reader = new FileReader();
        
        reader.onload = (evt) => {

            const arrayBuffer = evt.target?.result as ArrayBuffer;
            const workbook = XLSX.read(arrayBuffer, {type : 'array'});
            
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData : any[][] = XLSX.utils.sheet_to_json(worksheet, {header : 1});
            setData(jsonData);
        };

        reader.readAsArrayBuffer(selectedFile);
    };

    const handleReset = () => {

            setSelectedFile(null);
            setData([]);
            uploadRef.current?.reset();   // Clear filename in Upload Component

    };



    return(

        <div className="flex flex-col items-center justify-center mt-[100px]">

            <h1 className="font-semibold text-2xl mt-[-20px]"> Upload Excel File :  </h1>

            <FileUploadComponent ref={uploadRef} onFileSelect={handleFileUpload} accept=".xlsx, .xls"/>

        <div className="flex gap-x-6 mt-[30px]">
            <Button component = "label" startIcon={<ChangeCircle/>} role={undefined} sx={{fontWeight : "bold"}} variant="contained"
               onClick={handleProcess} disabled = {!selectedFile}>  Process 
            </Button>

            <Button variant="contained" sx={{width : "120px"}} color="primary" onClick={handleReset} startIcon={<RestartAlt/>}> 
                Reset 
            </Button>

        </div>



            {
                data.length > 0 && (

                    <table className="table-auto border-collapse border border-gray-400 mt-[60px]">

                        <thead>
                            <tr>
                                {
                                    data[0].map((header, i)=> (

                                        <th key={i} className="border px-4 py-2 bg-gray-100"> 
                                            {header} 
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((row,i)=> (

                                <tr key={i}> 
                                    {
                                        row.map((cell,i)=> (
                                            <td key={i} className="border px-4 py-2"> 
                                                {cell} 
                                             </td>
                                        ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}