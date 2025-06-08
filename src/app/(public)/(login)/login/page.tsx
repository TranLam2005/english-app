import FormLoginPage from "@/components/login/Page";

function LoginPage(): React.ReactNode {
    return ( 
        <div className="w-[300px] flex flex-col items-center justify-center gap-[20px] relative">
            <FormLoginPage title="ĐĂNG NHẬP" type="login"/>
        </div>
     );
}

export default LoginPage;