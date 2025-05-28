"use client";

import React, { useState } from "react";
import * as XLSX from 'xlsx';

export default function ExcelUploadPage() {

    const [data, setData] = useState<any[][]>([]);

    const handleFileUpload = (e : React.ChangeEvent<HTMLElement>) => {

        const file = (e.target as HTMLInputElement).files?.[0];         // for type checking 📌
        if(!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {

            const arrayBuffer = evt.target?.result as ArrayBuffer;
            const workbook = XLSX.read(arrayBuffer, {type : 'array'});
            
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData : any[][] = XLSX.utils.sheet_to_json(worksheet, {header : 1});
            setData(jsonData);
        };

        reader.readAsArrayBuffer(file);
    };


    return(

        <div className="flex flex-col items-center justify-center mt-[100px]">

            <h1> Upload Excel File :  </h1>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="border border-black hover:cursor-pointer" />

            {
                data.length > 0 && (

                    <table className="table-auto border-collapse border border-gray-400 mt-[20px]">

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