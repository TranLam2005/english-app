'use client'
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function Error({
    error,
    reset,
}: {
    error: Error & {digest?: string}
    reset: () => void;
}
) {
    useEffect(() => {
        console.error(error);
    }, [error])
    return ( 
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-[20px]">
            <h2>Something went wrong!</h2>
            <Button className="cursor-pointer" onClick={() => reset()}>Try again</Button>
        </div>
     );
}

export default Error;