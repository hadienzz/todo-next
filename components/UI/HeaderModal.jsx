import { taskContext } from "@/app/context/TaskContextProvider"
import { useContext } from "react"

const HeaderModal = ({ title }) => {
    const { handleCloseModal } = useContext(taskContext)

    return (
        <div className="">
            <div className="flex justify-between items-center mb-3">
                <p className="text-white">{title}</p>
                <p className="cursor-pointer text-white" onClick={handleCloseModal}>X</p>
            </div>
            <div className="border-[1px] border-[#979797]"></div>

        </div>

    )
}

export default HeaderModal