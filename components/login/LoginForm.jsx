import { getAccount } from "@/app/lib/action"
import { useActionState } from "react"
import Input from "../UI/Input"

const LoginForm = () => {
    const [state, formAction] = useActionState(getAccount, { message: null })
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI

    return (
        <form action={formAction}>
            <div className="mt-[53px] grid gap-[25px]">
                <Input label={'Username'} placeholder={'Enter your username'} type={'text'} name={'username'} />
                <Input label={'Password'} placeholder={'• • • • • • • •'} type={'password'} name={'password'} />
            </div>
            <div>
                <button className="w-full bg-[#8687E7] rounded-md text-white  py-3 mt-[69px]" type="submit">Login</button>
            </div>
        </form>

    )
}

export default LoginForm