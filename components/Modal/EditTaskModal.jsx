import { useContext } from "react"
import CustomModal from "../UI/CustomModal"
import HeaderModal from "../UI/HeaderModal"
import { taskContext } from "@/app/context/TaskContextProvider"

const EditTaskModal = ({ title, description, id }) => {
    const { handleCloseModal } = useContext(taskContext)

    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white w-4/5 h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <HeaderModal title={'Edit Task Modal'} />

                <h1 className="text-primaryWhite my-6 cursor-pointer">{title}</h1>
                <h1 className="text-[#AFAFAF] cursor-pointer">{description}</h1>

                <footer className="flex items-center justify-center gap-[15px] mt-4">
                    <button className="text-[#8687E7] w-[143px] pt-3 px-6" onClick={handleCloseModal}>Cancel</button>
                    <button className="bg-[#8687E7] w-[153px] py-3 px-6 rounded-[4px] text-white">Edit</button>
                </footer>

            </div>
        </CustomModal>
    )
}

export default EditTaskModal