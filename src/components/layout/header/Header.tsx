'use client';
import './Header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible';
import { Input } from '../../ui/input';
import {Search} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GroupMenu } from './MenuGroup';
import { menuList } from './states/mocks';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    return ( 
        <header className="w-full bg-[#00953B] flex flex-col justify-center items-center">
            <div className="flex justify-between items-center lg:w-[1300px] p-[20px] box-content 2xl:w-[1440px]">
                <div className='flex items-center gap-[20px]'>
                    <Image
                        src="https://learnenglish.britishcouncil.org/sites/podcasts/themes/bc_ui/logo.svg"
                        alt="logo"
                        width={120}
                        height={40}
                        priority
                    />
                    <Link className="text-[21px] relative text-white font-semibold before:content-[''] before:absolute before:text-white before:bg-white before:w-[1px] before:h-full before:left-[-10px] " href="/">
                        Learn English
                    </Link>
                </div>
                <div className='flex items-center justify-between gap-[20px] min-h-[36px]'>
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className='flex flex-row-reverse items-center gap-[10px]'
                    >
                        <CollapsibleTrigger className='min-h-[36px]'>
                            <Search className='text-white cursor-pointer'/>
                        </CollapsibleTrigger>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    layout={false}
                                    initial={{ maxWidth: 0}}
                                    animate={{ maxWidth: 300}}
                                    exit={{ maxWidth: 0}}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <CollapsibleContent className='w-[300px]'>
                                        <Input
                                            type="text"
                                            placeholder="Search..."
                                            onChange={(e) => setValueSearch(e.target.value)}
                                            value={valueSearch}
                                            className="w-full bg-white text-black"
                                        />
                                    </CollapsibleContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Collapsible>
                    <Link className="text-white  text-[16px] relative font-[480] before:content-[''] flex items-center before:absolute before:w-[1px] before:h-[18px] before:left-[-10px] before:top-[4px] before:bg-white hover:text-[#5DEB4B] cursor-pointer" href={'/login'}>Log in</Link>
                    <Link className="text-white  text-[16px] relative font-[480] before:content-[''] before:absolute before:w-[1px] before:h-[18px] before:top-[4px] before:left-[-10px] before:bg-white hover:text-[#5DEB4B] cursor-pointer" href={'/registry'}>Registry</Link>
                </div>
            </div>
            <GroupMenu menuList={menuList}/>
        </header>
     );
}

export default Header;