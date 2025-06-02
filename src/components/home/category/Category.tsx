import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
export interface CategoryProps {
    isWrapped?: boolean;
}
function Category({isWrapped = false}: CategoryProps): React.ReactNode {
    return ( 
        <div className={cn(`flex h-[590px] w-[1290px] bg-white rounded-tl-[80px] rounded-br-[80px] mb-[50px] `, isWrapped ? 'flex-row-reverse !rounded-tl-[0px] !rounded-br-[0px] rounded-tr-[80px] rounded-bl-[80px]': '')}>
            <div className="flex-1 h-full">
                <img 
                    src={'https://res.cloudinary.com/dfxeqylzp/w_auto,c_scale,f_auto,q_auto,dpr_auto/images/articles/friendly-people.jpg'}
                    alt="category background"
                    className={cn("w-full h-full object-conver rounded-tl-[50px]", isWrapped ? '!rounded-tl-[0px] rounded-tr-[80px]' : '')}
                />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-[20px] h-full pr-[50px] pl-[80px] py-[120px]">
                <h3 className="text-[40px] text-[#23085A] font-bold mb-[20px]">
                    Skill
                </h3>
                <p className="text-[18px]">
                    Practise your listening, reading, writing and speaking and learn useful language to use at work or to communicate effectively with friends.
                </p>
                <ul className="list-disc relative left-[20px] text-[18px]">
                    <li>
                        Audio and video to practise your listening and speaking skills.
                    </li>
                    <li>
                        Audio and video to practise your listening and speaking skills.
                    </li>
                    <li>
                        Audio and video to practise your listening and speaking skills.
                    </li>
                </ul>
                <Button variant={'main'}>Get learning</Button>
            </div>
        </div>
     );
}

export default Category;