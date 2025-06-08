import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
    return ( 
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-[20px]">
            <h2>Not found</h2>
            <p>Could not found request resource</p>
            <Link href={'/'}>
                <Button className="cursor-pointer">Return Home</Button>
            </Link>
        </div>
     );
}

export default NotFound;