import { NextResponse, NextRequest } from "next/server";

const STATIC_TOKEN = process.env.STATIC_API_TOKEN;


export async function GET(req : NextRequest) {

    const authHeader = req.headers.get("Authorization");

    console.log("from header : " , authHeader);
    console.log("from ENV : " , STATIC_TOKEN);

    if(!authHeader || authHeader.trim() !== STATIC_TOKEN?.trim()) {
        return NextResponse.json({error : "Unauthorized"}, {status : 401});
    }

    return NextResponse.json({message : "success! Authenticated with static token"});

}