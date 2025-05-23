"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

// 🧠 Helper to check routes where Navbar should be hidden : 

const shouldHideNavbar = (pathname : string) => {
  return ["/login", "/registration"].includes(pathname);
}



// 👇 Create a client component to wrap layout and access route : 

export default function LayoutWrapper({children} : {children : React.ReactNode}){
  const pathname = usePathname();

  return(

    <>
        {!shouldHideNavbar(pathname) && <Navbar/>}
        {children}
    </> 
  );
}