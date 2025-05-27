"use client";

const fetchProtectedData = async () => {

    const res = await fetch("http://localhost:3000/myapi/protected", {
        method : "GET",
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        },
        cache : "no-store",
    });


    const data = await res.json();
    console.log(data);

}