import Header from "../../../components/Header.jsx/Header"
import Footer from "../../../components/UI/Footer";
import iconHero from "../../../public/IconHero.png";


const NoProjectsSelected = ({ image }) => {
    return (
        <main className="w-screen h-screen bg-[#121212] text-white">

            <Header title={'Index'} image={image} />

            <div className="grid justify-center mt-[86px] text-center text-primaryWhite md:text-2xl">
                <img src={iconHero.src} alt="Homepage Image" className="mx-auto" />
                <p className="font-medium">What do you want to do today?</p>
                <p className="font-medium">Tap + to add your tasks</p>
            </div>

            <Footer />
        </main>
    )
}

export default NoProjectsSelected