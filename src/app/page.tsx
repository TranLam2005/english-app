import Category from '@/components/home/category/Category';
import './globals.css';
import OnlineCoursesComponent from '@/components/home/OnlineCoursesCategory/Component';
import { mocksComponent1 } from '@/states/mocks/home/mocks';
import CarouselComponent from '@/components/home/Carousel';
import { Button } from '@/components/ui/button';
import { mocks3 } from '@/states/mocks/home/mocks';
import CoursesPracticeComponent from '@/components/home/CoursesPractice/CoursesPracticeComponent';
import Banner from '@/components/commonComponent/banner/Banner';
import { TitleHeaderBannerMock } from '@/components/commonComponent/banner/states/mocks';

export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <Banner 
        description='Learn English online and improve your skills through our high-quality courses and resources.'
        imageBanerUrl='https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/1280x500/public/2023-04/RS9260_GettyImages-1324510963_1440x960.jpg?itok=BRnKD4Xz'
        TitleComponent={TitleHeaderBannerMock}

      />
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
      <div className='w-full bg-[rgba(93,235,75,0.1)] flex flex-col gap-[40px] items-center justify-center'>
        <h2 className='text-[40px] text-[#23085A] w-[960px] font-bold text-center mt-[50px]'>Anyone can practise with our free resources</h2>
        <CarouselComponent />
        <div className='flex flex-col items-center justify-center gap-[20px] w-full'>
          <h3 className='text-[35px] text-[#23085A] w-[960px] font-bold text-center'>Plus hundreds more!</h3>
          <Button variant={'main'}>Get started for free</Button>
        </div>
        <div className='flex flex-col items-center justify-center gap-[20px] w-full mb-[50px]'>
          <h3 className='text-[35px] text-[#23085A] w-[960px] font-bold text-center'>Explore our free resources</h3>
          <ul className='custom-list flex items-center w-[1160px] justify-center gap-[30px] text-[#23085A] underline decoration-[#23085A] text-[18px]'>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Listening</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Reading</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Writting</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Speaking</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Vocabulary</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Grammar</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>Business English</li>
            <li className='hover:!decoration-[#00953B] hover:text-[#00953B] cursor-pointer'>General English</li>
          </ul>
        </div>
      </div>
      <div className='w-full bg-[#23085A] flex flex-col items-center justify-center gap-[40px]'>
          <p className='w-[860px] text-[18px] text-white mt-[50px]'>Explore our site to improve your English with our bite-sized lessons, quizzes and games. With our varied selection of learning materials, you can practise your English for free.</p>
          <ul className='flex items-center justify-center gap-[30px] w-full'>
            <li><CoursesPracticeComponent /></li>
            <li><CoursesPracticeComponent /></li>
            <li><CoursesPracticeComponent /></li>
          </ul>
          <Button variant={'main'} className='bg-[#5DEB4B] text-[#23085A] hover:bg-[#578750] mb-[50px]'>Get started</Button>
      </div>
      <div className='w-full bg-white flex items-center justify-center gap-[30px] box-content py-[60px]'>
          {mocks3.map((data, index) => (
            <OnlineCoursesComponent className='shadow-lg shadow-zinc-500/30 !w-[570px]' key={index} srcImage={data.srcImage} title={data.title} description={data.description} slug={data.slug}/>
          ))}
      </div>
    </div>
  );
}
