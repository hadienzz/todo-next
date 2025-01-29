'use client'

import { useSession } from "next-auth/react"
import StartingPage from "./pages/StartingPage"
import Image from "next/image"
import iconHero from '../../public/IconHero.png'

const App = () => {
    const { data: session, status } = useSession()
console.log(status)
    if (status === 'loading') {
        return (
            <div className="w-screen h-screen bg-[#121212]">...</div>
        )
    }

    return (
        <main className="w-screen h-screen bg-[#121212]">
            <div>
                <h1>Index</h1>
                <div>
                    <Image src={`${session?.user.image}`} fill />
                </div>
            </div>
        </main>
    )
}

export default App