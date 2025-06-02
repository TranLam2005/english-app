import Link from "next/link";


interface OnlineCoursesComponentProps {
    srcImage: string;
    title: string;
    description: string;
    slug: string;
}

function OnlineCoursesComponent(data: OnlineCoursesComponentProps): React.ReactNode {
    return ( 
        <Link className="w-[300px] h-[345px] bg-white flex items-center justify-center rounded-tl-[30px] rounded-br-[30px]" href={data.slug}>
            <div className="flex flex-col items-center justify-center w-[240px] gap-[10px]">
                <div>
                    <img
                        src={data.srcImage}
                        alt="Online Courses"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-[#23085A] text-[20px] font-bold hover:underline decoration-[#23085A]">
                    {data.title}
                </div>
                <div>
                    <p className="text-[16px] text-black text-[17px]">
                        {data.description}
                    </p>
                </div>
            </div>
        </Link>
     );
}

export default OnlineCoursesComponent;