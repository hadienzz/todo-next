import Input from "../../../../components/UI/Input"

const RegisterPage = () => {
    return (
        <main className="h-screen bg-[#121212] px-6 ">
            <h1>Login</h1>
            <div className="mt-[53px] grid gap-[25px]">
                <Input label={'Username'} placeholder={'Enter your username'} type={'text'} />
                <Input label={'Password'} placeholder={'• • • • • • • •'} type={'password'} />
            </div>
            <div>
                <button className="w-full bg-[#8687E7] rounded-md text-white  py-3 mt-[69px]">Login</button>
            </div>
        </main>
    )
}

export default RegisterPage