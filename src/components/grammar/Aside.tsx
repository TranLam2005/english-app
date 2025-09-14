import { Check } from "lucide-react";

function AsideComponent() {
    return ( 
        <div className="border-[10px] rounded-tr-[30px] rounded-bl-[30px] flex flex-col border-[#EBEFF0] gap-[15px] bg-white box-content py-[30px] px-[10px]">
            <span className="flex gap-[10px] text-[18px] text-[var(--color-main)] hover:text-[#5DEB4B] hover:underline hover:decoration-[#5DEB4B] cursor-pointer"><Check />Grammar</span>
            <span className="flex gap-[10px] text-[18px] text-[var(--color-main)] hover:text-[#5DEB4B] hover:underline hover:decoration-[#5DEB4B] cursor-pointer"><Check />Grammar</span>
            <span className="flex gap-[10px] text-[18px] text-[var(--color-main)] hover:text-[#5DEB4B] hover:underline hover:decoration-[#5DEB4B] cursor-pointer"><Check />Grammar</span>
        </div>
     );
}

export default AsideComponent;