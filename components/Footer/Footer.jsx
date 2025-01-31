import FooterList from "./FooterList"
import HomeIcon from "../icons/HomeIcon"
import CalendarIcon from "../icons/CalendarIcon"
import ProfileIcon from "../icons/ProfileIcon"
import ClockIcon from "../icons/ClockIcon"
import AddIcon from "../icons/AddIcon"

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
    return (
        <footer className="w-screen h-[100px] absolute bottom-0 flex justify-center items-center gap-[25px] sm:gap-[30px] md:gap-[35px]  bg-[#363636] px-2">
            <FooterList {...footerContent[0]} />
            <FooterList {...footerContent[1]} />
            <div className="rounded-full w-[64px] h-[64px] text-[32px] bg-[#8687E7] flex justify-center items-center cursor-pointer -mt-[100px]">
                <AddIcon />
            </div>
            <FooterList {...footerContent[2]} />
            <FooterList {...footerContent[3]} />
        </footer>
    )
}

export default Footer