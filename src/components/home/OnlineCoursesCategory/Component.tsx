import Link from "next/link";
import { cn } from "@/lib/utils";


interface OnlineCoursesComponentProps {
    srcImage: string;
    title: string;
    description: string;
    slug: string;
    className?: string;
}

function OnlineCoursesComponent(data: OnlineCoursesComponentProps): React.ReactNode {
    return ( 
        <Link className={cn("w-[300px] h-[345px] p-[40px] bg-white flex items-center justify-center rounded-tl-[30px] rounded-br-[30px]", data.className)} href={data.slug}>
            <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                <div>
                    <img
                        src={data.srcImage}
                        alt="Online Courses"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={cn("text-[20px] font-bold hover:underline ", data.className ? '' : 'text-[#23085A] decoration-[#23085A]')}>
                    {data.title}
                </div>
                <div>
                    <p className="text-[16px] text-[17px]">
                        {data.description}
                    </p>
                </div>
            </div>
        </Link>
     );
}

export default OnlineCoursesComponent;