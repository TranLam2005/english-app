'use client';
import BreadcrumbComponent from "@/components/commonComponent/breadcrumb/Breadcrumb";
import Image from "next/image";
import "./a1-a2-grammar.scss";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/grammar/Section";
import AsideComponent from "@/components/grammar/Aside";
import { mocksComponent1 } from "@/states/mocks/home/mocks";
import OnlineCoursesComponent from "@/components/home/OnlineCoursesCategory/Component";

function A1_A2_Grammar() {
    return ( 
        <div className="flex flex-col items-center justify-center w-full">
            <div className="px-[70px] py-[20px] w-full">
                <BreadcrumbComponent />
            </div>
            <div className="w-[1300px] flex flex-col items-start justify-center">
                <h1 className="text-[36px] text-[var(--color-main)] font-bold">A1-A2-Grammar</h1>
                <div className="w-full flex">
                    <section className="flex-3 flex flex-col items-start justify-center gap-[50px]">
                        <div className="w-full">
                            <Image 
                                src={'/pictureSectionGrammar1.jpg'}
                                alt="A1-A2 Grammar"
                                className="w-full h-full rounded-br-[60px]"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="bannerAfter w-[990px] h-[260px] bg-[var(--bg-main)] relative overflow-hidden">
                            <div className="banner w-[750px] h-[200px] bg-white p-[20px] absolute bottom-0 left-[100px] z-2 flex flex-col items-center justify-center gap-[20px]">
                                <p className="text-[var(--color-main)] text-[28px] text-center">Discover your current English level by taking our free online test</p>
                                <Button variant={"main"}>Discover your level</Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[20px] text-[18px]">
                            <p>Are you a learner at <Link className="hover:text-[#920061] underline" href={'/'}>A1 (elementary)</Link> or <Link className="hover:text-[#920061] underline" href={'/'}>A2 (pre-intermediate)</Link> English level?</p>
                            <p>
                                In this section you can improve your grammar with our clear and simple grammar lessons. Start with an exercise to test your understanding. Then, read the explanation to improve your grammar knowledge. Finally, test your understanding again to see if you have improved.
                            </p>
                            <p>Choose a grammar point and start improving your grammar today. Good luck!</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[50px]">
                            <h2 className="text-[var(--color-main)] text-[32px] font-medium">Choose a grammar lesson</h2>
                            <div className="flex flex-col items-start justify-center gap-[60px] w-full">
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
                                />
                                <Section 
                                    title="Adjectives and prepositions"
                                    imageUrl="/pictureSectionGrammar1.jpg"
                                    description="Do you know how to use adjectives with prepositions like interested in or similar to? Test what you know with interactive exercises and read the explanation to help you."
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
                            </div>
                        </div>
                    </section>
                    <aside className="flex-1 ml-[40px] flex flex-col justify-start gap-[10px]">
                        <AsideComponent />
                        <AsideComponent />
                        <AsideComponent />
                    </aside>
                </div>
            </div>
            <div className='w-full z-2 mt-[100px] bg-[#23085A] flex flex-col items-start justify-center gap-[20px] py-[50px] px-[70px]'>
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

export default A1_A2_Grammar;