import CustomModal from "../Modal/CustomModal"

const TaskModal = () => {


    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white w-screen h-1/4 bg-[#363636]">
                <p className="text-white">Add Task</p>
                <input type="" />
                <p className="text-[AFAFAF]">Description</p>
            </div>
        </CustomModal>
    )
}

export default TaskModal