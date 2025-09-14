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
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getTokenFromCookies, removeTokenFromCookies, TOKEN_TYPE } from '@/api/Cookies';
import { cn } from '@/lib/utils';
function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const isLoginPage: boolean = pathname === '/login' || pathname === '/registry';
    const namePage: string = pathname.substring(1, pathname.length);
    const isAuthenticated: boolean = getTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN) !== '';
    const handleLogout = () => {
        removeTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN);
        removeTokenFromCookies(TOKEN_TYPE.REFRESH_TOKEN);
        router.push('/login');
    }
    if (!isLoginPage) {
        return ( 
            <header className={cn("w-full bg-[#00953B] flex flex-col justify-center items-center transition-all duration-700 ease-out")}>
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
                        {isAuthenticated ? 
                        (<Button onClick={handleLogout} variant={'logout'}>
                            <div
                                className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                                <path
                                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                                ></path>
                                </svg>
                            </div>
                            <div
                                className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                Logout
                            </div>
                        </Button>) : 
                        (
                            <div className='flex items-center justify-center gap-[20px]'>
                                <Link className="text-white  text-[16px] relative font-[480] before:content-[''] flex items-center before:absolute before:w-[1px] before:h-[18px] before:left-[-10px] before:top-[4px] before:bg-white hover:text-[#5DEB4B] cursor-pointer" href={'/login'}>Log in</Link>
                                <Link className="text-white  text-[16px] relative font-[480] before:content-[''] before:absolute before:w-[1px] before:h-[18px] before:top-[4px] before:left-[-10px] before:bg-white hover:text-[#5DEB4B] cursor-pointer" href={'/registry'}>Registry</Link>
                            </div>
                        )}
                        
                    </div>
                </div>
                <GroupMenu menuList={menuList}/>
            </header>
         );
    }
    else {
        return (
            <header className='w-full flex justify-center items-center'>
                <div className='lg:w-[1300px] 2xl:w-[1440px] flex items-center justify-between'>
                    <div>
                        <Image 
                            src={'/Logo.jpg'}
                            alt='Logo'
                            width={40}
                            height={40}
                            className='rounded-full'
                        />
                    </div>
                    <span className='font-[500] text-[#23085A] text-[30px]'>{namePage.toUpperCase()}</span>
                </div>
            </header>
        )
    }
}

export default Header;