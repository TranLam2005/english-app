'use client';
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../../ui/breadcrumb";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { getPathName } from "./logic/GetPathName";


export interface BreadcrumbComponentProps {
    className?: string;
}
function BreadcrumbComponent({className}: BreadcrumbComponentProps): React.ReactNode {
    const pathname = usePathname();
    const pathNameSegments = pathname.split('/').slice(1, pathname.split('/').length);
    {/** i have a array pathNameSegments */}
    return (
        <Breadcrumb className={className}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={'/'}><Home className="w-4 h-4 text-[#23085A]"/></Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[#23085A]"/>
                {
                    pathNameSegments.map((segment, index) => {
                        const pathNameSegment: string = getPathName({pathNameSegments, pathName: segment}) || '';
                        return (
                            <BreadcrumbList key={index}>
                                {index > 0 && <BreadcrumbSeparator className="text-[#23085A]"/>}
                                <BreadcrumbItem key={index}>
                                    <BreadcrumbLink asChild>
                                        <Link className="text-[#23085A]" href={`/${pathNameSegment}`}>{segment}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
     );
}

export default BreadcrumbComponent;