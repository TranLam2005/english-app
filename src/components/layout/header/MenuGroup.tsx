import { cn } from "@/lib/utils"
import React from "react"
import type { MenuItems } from "./states/types"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";



export interface MenuSingleProps {
    menu: MenuItems;
    isChecked?: boolean;
}
export const SingleMenu = ({menu , isChecked}: MenuSingleProps): React.ReactNode => {
    const navigation = useRouter();
    if (!menu.children.length) {
        return (
            <span
                onClick={() => navigation.push(menu.slug)}
                className={cn('text-white font-semibold text-[17px] hover:text-[#5DEB4B] cursor-pointer', isChecked ? 'text-[#5DEB4B]' : '')}>
                {menu.name}
            </span>
        )
    }
    return (
        <Tooltip>
            <TooltipTrigger
            >
                <span
                    onClick={() => navigation.push(menu.slug)}
                    className={cn('text-white font-semibold w-fit text-[17px] hover:text-[#5DEB4B] cursor-pointer', isChecked ? 'text-[#5DEB4B]' : '')}>
                    {menu.name}
                </span>
            </TooltipTrigger>
            <TooltipContent className="bg-white cursor-pointer relative top-[19px]">
                <ul>
                    {menu.children.map((child, index) => (
                        <li key={index} onClick={() => navigation.push(`${menu.slug}${child.slug}`)} className="text-black text-[15px] font-[400] p-4 hover:bg-[#f5f5f5]">
                            {child.name}
                        </li>
                    ))}
                </ul>
                                
            </TooltipContent>
            
        </Tooltip>
    )
}



export interface GroupMenuProps {
    menuList: MenuItems[];
}
export const GroupMenu = ({menuList}: GroupMenuProps): React.ReactNode => {
    const currentPath = usePathname();
    const isChecked = (menu: MenuItems) => {
        if (menu.slug === '/') {
            return currentPath === '/';
        }
        const menuPath = menu.slug;
        if (currentPath.startsWith(menuPath) || currentPath === menuPath) {
            return true;
        }
        return false;
    }
    return (
        <nav className="flex items-center justify-between lg:w-[1300px] 2xl:w-[1440px] p-[20px] box-content">
            {menuList.map((menu, index) => (
                <SingleMenu key={index} menu={menu} isChecked={isChecked(menu)}/>
            ))}
        </nav>
    )
}