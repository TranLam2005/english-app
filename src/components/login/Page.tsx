'use client'
import Link from "next/link";
import LoginForm from "./Form";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { TypeFormOfPageProps } from "./states";
import React from "react";
import FacebookIcon from "../icon/Facebook";
import GoogleIcon from "../icon/Google";
function FormLoginPage({title, type}: TypeFormOfPageProps): React.ReactNode {
    const navigationPage = type === 'login' ? 'registry' : 'login';
    return ( 
        <div className="w-[300px] flex flex-col items-center justify-center gap-[20px] relative">
            <h1 className="text-[30px] font-semibold text-[#23085A]">{title}</h1>
            <LoginForm titleBtn={title}/>
            {type === 'login' && (
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                    <Link href="/registry" className="text-[#05a] relative left-[-88px]">Quên mật khẩu ?</Link>
                    <span className="flex w-full items-center gap-[15px] text-[#ccc]"><Separator className="flex-1"/> Hoặc <Separator className="flex-1"/></span>
                    <div className="flex items-center w-full justify-between ">
                        <Button onClick={() => window.location.href = 'https://smarttech-367cffc9dc63.herokuapp.com/oauth2/authorization/facebook'} className="bg-[#23085A] w-[130px] text-white cursor-pointer"><FacebookIcon /> Facebook</Button>
                        <Button onClick={() => window.location.href = 'https://smarttech-367cffc9dc63.herokuapp.com/oauth2/authorization/google'} className="bg-[#23085A] w-[130px] text-white cursor-pointer"><GoogleIcon /> Google</Button>
                    </div>
                </div>
            ) }
            {(type === 'registry' || 'login') && (
                <span className="text-[rgba(0,0,0,.26)] text-[16px] flex items-center justify-center w-full">
                    {type === 'login' ? 'Bạn mới biết đến Smart Tech?' : 'Bạn đã có tài khoản?'} &nbsp; <Link className="text-[#23085A]" href={`/${navigationPage}`}>{type === 'login' ? 'Đăng kí' : 'Đăng nhập'}</Link>
                </span>
            )}
        </div>
     );
}

export default FormLoginPage;