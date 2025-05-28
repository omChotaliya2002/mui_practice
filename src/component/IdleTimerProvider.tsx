"use client";

import { useIdleTimer } from "react-idle-timer";
import { useRouter } from "next/navigation";
import { useCallback } from "react";


const IdleTimerProvider = () => {


        const router = useRouter();

        const handleOnIdle = useCallback(() => {

            console.warn("User is idle");
            alert("You have been idle for a minute. Logging out...");
            router.push("/");
            
          },[router]);
        

        const {getRemainingTime, reset} = useIdleTimer({

            timeout : 1000*60,  // 1 minute
            onIdle : handleOnIdle,
            debounce : 500,
        });

        return null;
}

export default IdleTimerProvider;
