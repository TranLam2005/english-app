'use client';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@apollo/client";
import { createQuestion } from "./api";
import { getTokenFromCookies, parseJwt, TOKEN_TYPE } from "@/api/Cookies";

function CreateQuestion() {
    const [addExercise, {loading, error, data}] = useMutation(createQuestion)
    const author = parseJwt(getTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN))?.user_id;
    const formSchema = z.object({
        question: z.string().min(1, {message: 'Question is requeied.'}),
        answer: z.string().min(1, {message: 'Answer is required.'}),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: '',
            answer: '',
        },
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await addExercise({
                variables: {
                    exercise: {
                        question: values.question,
                        answer: values.answer,
                        author: Number(author)
                    }
                }
            })
            console.log('Create question response:', res);
            console.log('data ', data);
        }
        catch (err) {
            console.error('Full error object:', err);
            if (err instanceof Error) {
                console.error('Error message:', err.message);
            }
            
            form.setError('root', {message: 'Error occurred while publishing. Please try again later.'});
        }
    }
    if (loading) return <div>Loading...</div>;
    if (error) return <h1>{error.message}</h1>
    return ( 
        <main className="w-full h-screen flex items-center justify-center">

            <div className="flex flex-col items-center justify-center gap-[30px] w-[800px]">
                <h1>Create Question</h1>
                <Form {...form}>
                    <form className="flex flex-col items-center justify-center w-full gap-[40px]" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                            control={form.control}
                            name="question"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Question</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter question..." {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="answer"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Answer</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter answer..." {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Publish</Button>
                    </form>
                </Form>
            </div>
        </main>
     );
}

export default CreateQuestion;