import Banner from "@/components/commonComponent/banner/Banner";
import BreadcrumbComponent from "@/components/commonComponent/breadcrumb/Breadcrumb";
import AsideComponent from "@/components/grammar/Aside";
import Section from "@/components/grammar/Section";
import OnlineCoursesComponent from "@/components/home/OnlineCoursesCategory/Component";
import { Button } from "@/components/ui/button";
import { mocksComponent1 } from "@/states/mocks/home/mocks";
import Link from "next/link";
import './Grammar.scss';

function GrammarPage() {
    return ( 
        <div className="flex flex-col items-center justify-center w-full">
            <div className="px-[60px] py-[20px] w-full">
                <BreadcrumbComponent />
            </div>
            <Banner 
                description="Revise and practise your grammar to help you increase your confidence and improve your language level."
                imageBanerUrl="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/1280x500/public/2023-04/RS9260_GettyImages-1324510963_1440x960.jpg?itok=BRnKD4Xz"
                TitleComponent={() => (
                    <span className="text-[#23085A] text-[40px] font-bold">Grammar</span>
                )}
                className="rounded-br-[40px]"
            />
            <div className="w-[var(--width-main)] flex items-start justify-between mt-[50px]">
                <section className="flex-3 flex flex-col items-start justify-center gap-[60px]">
                    <div className="flex flex-col items-start justify-center gap-[20px] text-[18px] ">
                        <p>Practise your English grammar with clear grammar explanations and practice exercises to test your understanding. The learning materials are organised into two sections, organised by <Link href={'/english-level'} className="text-[var(--color-main)] underline text-[18px]">English level</Link></p>
                        <p>All learners, whatever their level, have questions and doubts about grammar as  learning English. There is also a grammar reference which helps to explain the verb tenses and grammar rules in a clear and simple way.</p>
                        <p>Decide which area of grammar you need help with today and choose a grammar point to work on. When you do the interactive exercises, you can see how well done. By revising and practising your grammar you will increase your confidence in English and improve your language level.</p>
                        <p>Practising little and often is the best way to improve your grammar, so come back tomorrow to choose another grammar point to work on. Good luck!</p>
                        <h2 className="text-[var(--color-main)] font-bold text-[32px]">Choose a section</h2>
                    </div>
                    <Section 
                        title="A1-A2 grammer" 
                        imageUrl="/pictureSectionGrammar1.jpg" 
                        description="Are you a learner at B1 (intermediate) or  B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons."
                    />
                    <Section 
                        title="A1-A2 grammer" 
                        imageUrl="/pictureSectionGrammar1.jpg" 
                        description="Are you a learner at B1 (intermediate) or  B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons."
                    />
                    <Section 
                        title="A1-A2 grammer" 
                        imageUrl="/pictureSectionGrammar1.jpg" 
                        description="Are you a learner at B1 (intermediate) or  B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons."
                    />
                    <Section 
                        title="A1-A2 grammer" 
                        imageUrl="/pictureSectionGrammar1.jpg" 
                        description="Are you a learner at B1 (intermediate) or  B2 (upper intermediate) English level? In this section, you can improve your grammar with our clear and simple grammar lessons."
                    />
                    <div className="w-full flex flex-col items-start gap-[20px] text-[18px]">
                        <h2 className="text-[32px] text-[var(--color-main)] font-bold">Learn to use grammer correctly and confidently</h2>
                        <p>
                            Our online English classes feature lots of useful learning materials and activities to help you improve your understanding of grammar in a safe and inclusive learning environment.
                        </p>
                        <p>
                            Our online English classes feature lots of useful learning materials and activities to help you improve your understanding of grammar in a safe and inclusive learning environment.
                        </p>
                        <Button variant={'main'} className="text-[16px]">Explore courses</Button>
                    </div>
                </section>
                <aside className="flex-1 h-full flex flex-col justify-start gap-[20px]">
                    <AsideComponent />
                    <AsideComponent />
                    <AsideComponent />
                </aside>
            </div>
            <div
                style={{
                    background: "url('/grammarBanner2.svg'), #5DEB4B",
                    backgroundSize: "707px 314px",
                    backgroundPosition: "550px 0",
                    backgroundRepeat: "no-repeat"
                }}
                className='h-[460px] w-full mt-[50px] relative'>
                    <div className="flex items-center px-[30px] py-[50px] leading-tight justify-center w-[700px] h-[300px] absolute bg-white rounded-tr-[40px] left-[110px] top-[90px] custom">
                        <div className="flex flex-col items-start justify-center gap-[30px]">
                            <h2 className="text-[36px] font-bold text-[var(--color-main)]">Are you looking for a face-to-face English course near you?</h2>
                            <Button className="bg-[#5DEB4B] hover:bg-[#5DEB4B] border border-[var(--color-main)] rounded-none w-[320px] h-[56px] text-black">- Choose a country/territory -</Button>
                        </div>
                    </div>
            </div>
            <div className='w-full z-2 bg-[#23085A] flex flex-col items-start justify-center gap-[20px] py-[50px] px-[70px]'>
                <h2 className='text-[28px] text-white font-bold'>Online courses</h2>
                <ul className='flex items-center justify-start gap-[30px] w-full'>
                {mocksComponent1.map((item, index) => (
                    <OnlineCoursesComponent
                    key={index}
                    srcImage={item.srcImage}
                    title={item.title}
                    description={item.description}
                    slug={item.slug}
                    className='rounded-tl-[0px] rounded-br-[0px] !py-[0px] !h-[250px] border-l border-r border-[#552DA7] bg-[#23085A] text-white'
                    />
                ))}
                </ul>
            </div>
            
        </div>
     );
}

export default GrammarPage;
