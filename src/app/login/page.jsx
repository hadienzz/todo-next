'use client'

import { useActionState } from "react"
import Button from "../../../components/UI/Button"
import Input from "../../../components/UI/Input"
import { getAccount } from "../lib/action"
import AppleIcon from "../../../components/icons/AppleIcon"
import GoogleIcon from "../../../components/icons/GoogleIcon"
import LoginForm from "../../../components/login/LoginForm"
import { signIn, signOut, useSession } from 'next-auth/react'

const LoginPage = () => {
    const { data: session } = useSession()

    return (
        <main className="h-screen bg-[#121212] px-6 ">
            <h1 className="text-white font-bold text-[32px]" >{session ? 'You are signed in' : "You aren't signed in"}</h1>
            <button onClick={() => session ? signOut() : signIn()}>{session ? 'sign out' : 'sign in'}</button>
            <LoginForm />
            <div className="flex items-center justify-center mt-[45px]">
                <span className="border-[1px] border-[#979797] w-full"></span>
                <p className="text-[#685050] px-[2px]">or</p>
                <span className="border-[1px] border-[#979797] w-full "></span>
            </div>
            <div className="grid gap-5 mt-[29px]">
                <Button icon={<GoogleIcon />} onClick={() => signIn('google')} >Login with Google</Button>
                <Button icon={<AppleIcon />} >Login with Apple</Button>
            </div>
            <p className="text-[#979797] text-center mt-[46px]">Dont have an account? <span className="text-white cursor-pointer">Register</span> </p>
        </main>
    )
}

export default LoginPage