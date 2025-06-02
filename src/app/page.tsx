import Category from '@/components/home/category/Category';
import './globals.css';
import OnlineCoursesComponent from '@/components/home/OnlineCoursesCategory/Component';
import { mocksComponent1 } from '@/states/mocks/home/mocks';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <div className="w-full h-[553px] bg-no-repeat bg-cover bg-[url('https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/1280x500/public/2023-04/RS9260_GettyImages-1324510963_1440x960.jpg?itok=BRnKD4Xz')]">
        <div className="flex flex-col items-start justify-center bg-white w-[740px] relative top-[160px] left-[100px] p-[80px] box-content rounded-tr-[50px]">
          <div className="flex items-center gap-[20px]">
            <img src={'https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2025-02/British%20Council%20English%20indigo%20RGB_3.png?itok=ScGYu81L'} className="w-[200px] h-[33px]" alt="trademark"/>
            <span className="text-[#23085A] text-[15px] relative font-semibold before:content-[''] before:w-[1px] before:h-full before:bg-[#23085A] before:absolute before:left-[-10px]">LearnEnglish</span>
          </div>
          <span className="text-[40px] text-[#23085A] font-bold mt-[20px]">
            Learn English online and improve your skills through our high-quality courses and resources.
          </span>
        </div>
      </div>
      <div className="p-[30px] w-full flex items-center justify-center">
        <p className="lg:w-[1070px] 2xl:w-[1280px] text-[32px]">
          Everything you find here has been specially created by the British Council, the English teaching experts.
        </p>
      </div>
      <div className="bg-[rgba(93,235,75,0.1)] w-full relative custom-bg flex flex-col gap-[50px] items-center justify-center">
        <h2 className='text-[#23085A] text-[40px] font-bold w-[960px] text-center relative top-[30px]'>We provide you with the right tools to help you interact confidently in the real world.</h2>
        <Category />
        <Category isWrapped={true}/>
        <Category />
      </div>
      <div className="bg-[#23085A] w-full flex flex-col items-center justify-center gap-[50px] px-[30px] py-[50px]">
        <h2 className='text-[40px] font-bold text-white'>Learn with one of our popular online courses</h2>
        <div className='flex items-center justify-center gap-[30px] w-full'>
          {mocksComponent1.map((item, index) => (
            <OnlineCoursesComponent
              key={index}
              srcImage={item.srcImage}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
      <div className='w-full bg-[rgba(93,235,75,0.1)] flex flex-col items-center justify-center'>
        <h2 className='text-[40px] text-[#23085A] w-[960px] font-bold text-center'>Anyone can practise with our free resources</h2>
      </div>
    </div>
  );
}
