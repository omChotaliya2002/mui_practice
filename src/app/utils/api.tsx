//Use Axios on the frontend to send requests to this /api/register route :  📌📌

import axios from "axios";

const API_BASE = "api/register";

export const api = {
    get : ()=> axios.get(API_BASE),
    post : (data : any)=> axios.post(API_BASE, data),
    put : (data : any)=> axios.put(API_BASE, data),
    patch : (data : any)=> axios.patch(API_BASE, data),
    delete : ()=> axios.delete(API_BASE),
}