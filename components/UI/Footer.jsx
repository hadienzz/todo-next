import FooterList from "./FooterList"
import HomeIcon from "../icons/HomeIcon"
import CalendarIcon from "../icons/CalendarIcon"
import ProfileIcon from "../icons/ProfileIcon"
import ClockIcon from "../icons/ClockIcon"
import AddIcon from "../icons/AddIcon"
import { useContext } from "react"
import { taskContext } from "@/app/context/TaskContextProvider"

const footerContent = [
    {
        icon: <HomeIcon />,
        label: 'Index'
    },
    {
        icon: <CalendarIcon />,
        label: 'Calendar'
    },
    {
        icon: <ClockIcon />,
        label: 'Focus'
    },
    {
        icon: <ProfileIcon />,
        label: 'Profile'
    },
]

const Footer = () => {
    const { modalHandler } = useContext(taskContext)

    return (
        <footer className="w-full absolute bottom-0 left-0 flex justify-center items-center gap-[25px] sm:gap-[30px] md:gap-[75px] bg-[#363636] py-3 ">
            <FooterList {...footerContent[0]} />
            <FooterList {...footerContent[1]} />
            <div className="rounded-full w-[64px] h-[64px] text-[32px] bg-[#8687E7] flex justify-center items-center cursor-pointer -mt-[74px]" onClick={() => modalHandler('task')}>
                <AddIcon />
            </div>
            <FooterList {...footerContent[2]} />
            <FooterList {...footerContent[3]} />
        </footer>
    )
}

export default Footer