import './style.scss';

function CoursesPracticeComponent() {
    return ( 
        <div className='w-fit px-[60px] p-[25px] border-[3px] border-[#5DEB4B]  bg-white flex flex-col items-start justify-center gap-[20px] rounded-tl-[40px] rounded-br-[40px]'>
            <h3 className="before-custom relative left-[50px] text-[28px] text-[#23085A] font-bold before:content['']  before:border-[3px] before:border-[#5DEB4B] before:rounded-tl-[11px] before:rounded-br-[11px]">Skill</h3>
            <p className='w-[250px] relative left-[50px]'>
                Improve your English speaking, listening, reading and writing
            </p>
        </div>
     );
}

export default CoursesPracticeComponent;