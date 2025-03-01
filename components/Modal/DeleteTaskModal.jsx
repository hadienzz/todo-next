import { useContext } from "react"
import CustomModal from "../UI/CustomModal"
import HeaderModal from "../UI/HeaderModal"
import { taskContext } from "@/app/context/TaskContextProvider"

const DeleteTaskModal = ({ title, id }) => {
    const { handleDeleteTask, handleCloseModal } = useContext(taskContext)

    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white md:w-[40%]  w-4/5 h-auto py-[25px] bg-[#363636] px-6 rounded-md">
                <HeaderModal title={'Delete Task'} />
                
                <div className="text-primaryWhite text-center mt-5">
                    <h1>Are you sure want to delete this task?</h1>
                    <p>Task Title: {title}</p>
                </div>

                <footer className="flex items-center justify-center gap-[15px] mt-4">
                    <button className="text-[#8687E7] w-[143px] pt-3 px-6" onClick={handleCloseModal}>Cancel</button>
                    <button className="bg-[#8687E7] w-[153px] py-3 px-6 rounded-[4px] text-white" onClick={() => handleDeleteTask(id)}>Delete</button>
                </footer>

            </div>
        </CustomModal>
    )
}

export default DeleteTaskModal