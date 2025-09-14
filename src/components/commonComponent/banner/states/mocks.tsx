import React from "react";

export function TitleHeaderBannerMock(): React.ReactNode {
    return ( 
        <div className="flex items-center gap-[20px]">
            <img src={'https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2025-02/British%20Council%20English%20indigo%20RGB_3.png?itok=ScGYu81L'} className="w-[200px] h-[33px]" alt="trademark"/>
            <span className="text-[#23085A] text-[15px] relative font-semibold before:content-[''] before:w-[1px] before:h-full before:bg-[#23085A] before:absolute before:left-[-10px]">LearnEnglish</span>
        </div>
     );
}

