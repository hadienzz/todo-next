import Link from "next/link"

const LoginPage = () => {
    return (
        <main className="bg-[#121212] h-screen flex items-center text-center flex-col justify-between">
            <div className="mt-[58px]">
                <h1 className="text-[#FFF] text-[32px] font-bold mb-[26px]">Welcome UpTodo</h1>
                <p className="text-dark max-w-[287px]">Please login to your account or create new account to continue</p>
            </div>
            <div className="text-white flex flex-col gap-7 mb-[67px]">
                <button className='px-[138px] py-3 bg-[#8875FF] rounded-[4px] '>LOGIN</button>
                <Link href={'/login/register'} className="border-2 py-3 border-[#8E7CFF] rounded-[4px]">
                    <button className="">CREATE ACCOUNT</button>
                </Link>
            </div>
        </main >
    )
}

export default LoginPage