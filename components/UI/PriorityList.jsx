import { taskContext } from "@/app/context/TaskContextProvider"
import { useContext } from "react"

const PriorityList = ({ icon, number }) => {
    const { handleAddPriority } = useContext(taskContext)
    
    return (
        <div className="cursor-pointer bg-[#272727] text-white flex flex-col items-center justify-center w-[64px] h-[64px] " onClick={() => handleAddPriority(number)}>
            <img src={icon} alt={number} className="mx-auto" />
            <p>{number}</p>
        </div>
    )
}

export default PriorityList