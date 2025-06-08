'use client'
import LeftIcon from "../icon/LeftIcon";
import RightIcon from "../icon/RightIcon";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { mocksOnlineCourses } from "@/states/mocks/home/mocks";
import SourcesCourses from "./sourcesCourses/Component";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { CarouselApi } from "../ui/carousel";


function CarouselComponent() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        })
    }, [api])
    return (
        <div className="flex flex-col gap-[30px] items-center justify-center w-[1069px]">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent className="w-[1000px]">
                    {mocksOnlineCourses.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <SourcesCourses srcImage={item.srcImage} title={item.title} description={item.description} slug={item.slug}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext  className="absolute right-[-70px] top-1/2 -translate-y-1/2 bg-[#23085A] rounded-full !w-[40px] !h-[40px] p-[30px] cursor-pointer hover:bg-[#6eb364]">
                    <RightIcon width={40} height={40}/>
                </CarouselNext>
                <CarouselPrevious className="absolute left-[-75px] top-1/2 -translate-y-1/2 bg-[#23085A] rounded-full !w-[40px] !h-[40px] p-[30px] cursor-pointer hover:bg-[#6eb364]">
                    <LeftIcon width={40} height={40}/>
                </CarouselPrevious>
            </Carousel>
            <div className="flex ítems-center justify-center gap-[20px] w-full">
                {mocksOnlineCourses.map((_, index) => (
                    <div key={index} onClick={() => {
                        setCurrent(index + 1)
                        api?.scrollTo(index)
                    }} className={cn("w-[20px] h-[20px] bg-[#23085A] rounded-full ", current === index + 1 ? "bg-[#6eb364]" : "bg-[#23085A]")}>

                    </div>
                ))}
            </div>
        </div> 
     );
}

export default CarouselComponent;