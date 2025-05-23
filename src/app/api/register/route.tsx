import { NextRequest, NextResponse } from "next/server";


// export async function GET(req : NextRequest) {

//     return NextResponse.json({message : "you've hit the get request"});

// }

export async function GET(req : NextRequest) {
    return NextResponse.json({message : "GET request received"} , { statusText : "OK"});
}

export async function POST(req : NextRequest) {
    const body = await req.json();
    return NextResponse.json({message : "POST request received", data : body},{ statusText: "OK" });
}

export async function PUT(req : NextRequest) {
    const body = await req.json();
    return NextResponse.json({message : "PUT request received", updated : body},{ statusText: "OK" });
}

export async function PATCH(req : NextRequest) {
    const body = await req.json();
    return NextResponse.json({message : "PATCH request received", changes : body},{ statusText: "OK" });
}

export async function DELETE(req : NextRequest) {
    return NextResponse.json({message : "DELETE request received"},{ statusText: "OK" });
}