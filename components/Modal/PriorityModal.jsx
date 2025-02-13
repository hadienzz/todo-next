import { DATA_PRIORITY } from "@/app/lib/data"
import CustomModal from "../UI/CustomModal"
import HeaderModal from "../UI/HeaderModal"
import PriorityList from "../UI/PriorityList"
import { useContext } from "react"
import { taskContext } from "@/app/context/TaskContextProvider"

const PriorityModal = () => {
    const { handleCloseModal, handleAddTask } = useContext(taskContext)

    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] max-w-[300px] h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <HeaderModal title='Priority' />

                <div className="grid grid-cols-4 gap-y-4 gap-x-5 items-center justify-center mt-[22px]">
                    {DATA_PRIORITY.map((item, idx) => (
                        <PriorityList key={idx} {...item} />
                    ))}
                </div>

                <footer className="flex items-center justify-center gap-[15px] mt-4">
                    <button className="text-[#8687E7] w-[143px] pt-3 px-6" onClick={handleCloseModal}>Cancel</button>
                    <button className="bg-[#8687E7] w-[153px] py-3 px-6 rounded-[4px] text-white" onClick={handleAddTask}>Save</button>
                </footer>

            </div>
        </CustomModal>
    )
}

export default PriorityModal