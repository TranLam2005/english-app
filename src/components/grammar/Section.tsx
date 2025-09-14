import { cn } from "@/lib/utils";
import Image from "next/image";

export interface SectionProps {
    className?: string;
    imageUrl: string;
    title?: string;
    description: string;
}
function Section({className, imageUrl, title, description}: SectionProps): React.ReactNode {
    return ( 
        <div className={cn("w-full h-[280px] flex items-center", className)}>
            <div className="flex-1 h-full rounded-bl-[50px]">
                <Image 
                    src={imageUrl}
                    alt="Section 1"
                    className="w-full h-full object-cover rounded-bl-[50px]"
                    width={200}
                    height={200}
                />
            </div>
            <div className=" !w-[580px] flex items-start justify-center px-[20px] py-[25px] h-full rounded-tl-[50px] relative left-[-50px] top-[60px] bg-white">
                <div className="flex flex-col items-start justify-start h-full w-full">
                    <h2 className="text-[28px] text-[var(--color-main)] font-bold hover:text-[#00953B] hover:underline cursor-pointer">{title}</h2>
                    <span className="text-[18px]">
                        {description} 
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Section;