'use client';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { restApi } from '@/api/restApi';
import { TOKEN_TYPE } from '@/api/Cookies';
import { useRouter } from 'next/navigation';
import { setTokenToCookies } from '@/api/Cookies';
import { usePathname } from 'next/navigation';
import { LoginFormProps } from './states';
import { toast } from 'sonner';
import Loading from '@/app/loading';

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(5, {
        message: "Password must be at least 5 characters.",
    }),
    email: z.string().email({message: 'Email invalid format.'}).optional(),
})
function LoginForm({titleBtn = 'ĐĂNG NHẬP'}: LoginFormProps) {
    const pathname = usePathname();
    const router = useRouter();
    const namePage: string = pathname.substring(1, pathname.length);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })
    const onSubmit = (namePage: string) => (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);
            restApi.post(`/${namePage}`, values)
            .then(res => {
                if (namePage === 'login') {
                    setTokenToCookies(TOKEN_TYPE.ACCESS_TOKEN, res.data);
                    setIsLoading(false);
                    router.push('/');
                }
                else if (namePage === 'registry') {
                    toast.success('Created account successfully. Please login.');
                    router.push('/login');
                }
            })
            .catch(err => {
                setIsLoading(false);
                form.setError('username', {message: err.response?.data || 'username or password is incorrect'});
                form.setError('password', {message: err.response?.data || 'username or password is incorrect'});
                if (namePage === 'registry') {
                    form.setError('email', {message: err.response?.data || 'Email already exists.'});
                    form.setError('username', {message: err.response?.data || 'Username already exists.'});
                }
            })
        }
        catch (error) {
            form.setError('root', {message: 'Error ouccurred while logging in. Please try again later.'});
            console.error('Login error:', error);
        }
    }
    if (isLoading) {
        return <Loading />
    }
    return ( 
        <Form {...form}>
            <form className='flex-col flex items-center justify-center w-full gap-[20px]' onSubmit={form.handleSubmit(onSubmit(namePage))}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder='Enter username' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField  
                    control={form.control}
                    name='password'
                    render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder='Enter password' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {namePage === 'registry' && (
                    <FormField 
                        control={form.control}
                        name='email'
                        render={({field}) => (
                            <FormItem className='w-full'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder='Enter your email' {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <button
                    className="group relative w-full flex items-center cursor-pointer justify-center h-9 px-4 py-2 rounded-md bg-black text-cyan-400 font-bold tracking-widest uppercase text-sm border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300 ease-in-out hover:text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] active:translate-y-1 active:shadow-[0_0_15px_rgba(34,211,238,0.45)] active:scale-[0.98]"
                    >
                    <span className="flex items-center gap-3 relative z-10">
                        <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-125"
                        >
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        {titleBtn}
                        <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-150"
                        >
                        <path d="M12 2v20m0-20L4 12m8-10l8 10"></path>
                        </svg>
                    </span>
                    <div
                        className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-600/25 to-blue-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm rounded-md"
                    ></div>
                    <div
                        className="absolute -inset-1 -z-10 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20 group-hover:opacity-30 blur-sm rounded-md transition-all duration-300 group-hover:blur-md"
                    ></div>
                </button>
            </form>
        </Form>
     );
}

export default LoginForm;