'use client'

import { useActionState, useRef } from "react"
import Button from "../../../components/UI/Button"
import Input from "../../../components/UI/Input"
import { useFormState } from "react-dom"
import { getAccount } from "../lib/action"



const RegisterPage = () => {
    const [state, formAction] = useActionState(getAccount, { message: null })

    return (
        <main className="h-screen bg-[#121212] px-6 ">
            <h1 className="text-white font-bold text-[32px]" >Login</h1>
            <form action={formAction}>
                <div className="mt-[53px] grid gap-[25px]">
                    <Input label={'Username'} placeholder={'Enter your username'} type={'text'} name={'username'} />
                    <Input label={'Password'} placeholder={'• • • • • • • •'} type={'password'} name={'password'} />
                </div>
                <div>
                    <button className="w-full bg-[#8687E7] rounded-md text-white  py-3 mt-[69px]" type="submit">Login</button>
                </div>
            </form>
            <div className="flex items-center justify-center mt-[45px]">
                <span className="border-[1px] border-[#979797] w-full"></span>
                <p className="text-[#979797] px-[2px]">or</p>
                <span className="border-[1px] border-[#979797] w-full h-[1px]"></span>
            </div>
            <div className="grid gap-5 mt-[29px]">
                <Button>Login with Google</Button>
                <Button>Login with Apple</Button>
            </div>
            <p className="text-[#979797] text-center mt-[46px]">Dont have an account? <span className="text-white cursor-pointer">Register</span> </p>
        </main>
    )
}

export default RegisterPage