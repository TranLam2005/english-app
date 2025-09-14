import React from "react";
import { BannerProps } from "./states/types";
import { cn } from "@/lib/utils";

const Banner: React.FC<BannerProps> = ({ TitleComponent, description, imageBanerUrl, className}) => {
    return ( 
        <div style={{
            backgroundImage: `url(${imageBanerUrl})`,
        }} className={cn(`w-full h-[553px] bg-no-repeat bg-cover`, className)}>
            <div className="flex flex-col items-start justify-center bg-white w-[740px] relative top-[160px] left-[100px] p-[80px] box-content rounded-tr-[50px]">
            <TitleComponent />          
            <span className="text-[40px] text-[#23085A] font-bold mt-[20px]">
                {description}
            </span>
            </div>
        </div>
     );
}

export default Banner;