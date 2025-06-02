import Link from "next/link";
import type { Component1 } from "@/states/types/home/types";


function SourcesCourses(data: Component1): React.ReactNode {
    return ( 
        <Link className="w-[300px] h-[345px] flex-col flex bg-white flex items-center justify-center rounded-tl-[30px] rounded-br-[30px]" href={data.slug}>
            <div className="flex-1 h-[173px] w-full rounded-tl-[30px]">
                <img 
                    src={data.srcImage}
                    alt="Sources Courses"
                    className="h-full w-full object-cover rounded-tl-[30px] object-cover"
                />
            </div>
            <div className="p-[30px] flex flex-col items-center justify-center flex-1">
                <div className="flex-1 text-[#23085A] text-[30px] font-bold hover:underline hover:text-[#00953B] decoration-[#00953B] ">
                    {data.title}
                </div>
                <div className="flex-3">
                    <p className="w-full h-full line-clamp-3 overflow-hidden text-[18px] text-black">
                        {data.description}
                    </p>
                </div>
            </div>
        </Link>
     );
}

export default SourcesCourses;