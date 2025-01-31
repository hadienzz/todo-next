'use client'

import { useSession } from "next-auth/react"
import StartingPage from "./pages/StartingPage"
import Image from "next/image"
import iconHero from '../../public/IconHero.png'
import Footer from "../../components/Footer/Footer"

const NavIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="vuesax/outline/sort">
                <g id="sort">
                    <path id="Vector" d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="white" fill-opacity="0.87" />
                    <path id="Vector_2" d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="white" fill-opacity="0.87" />
                    <path id="Vector_3" d="M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z" fill="white" fill-opacity="0.87" />
                </g>
            </g>
        </svg>

    )

}

const App = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return (
            <div className="w-screen h-screen bg-[#121212]">...</div>
        )
    }

    return (
        <main className="w-screen h-screen bg-[#121212] text-white">
            <div className="px-6 flex justify-between pt-6">
                <NavIcon />
                <h1>Index</h1>
                <div className="max-w-[30px] max-h-[30px] rounded-full relative">
                    <Image src={`${session?.user.image}`} alt={`${session?.user.name}`} width={30} height={30} className="rounded-full" />
                </div>
            </div>
            <div className="grid justify-center mt-[86px] text-center text-primaryWhite">
                <img src={iconHero.src} alt="Homepage Image" className=" " />
                <p>What do you want to do today?</p>
                <p>Tap + to add your tasks</p>
            </div>
            <Footer />
        </main>
    )
}

export default App