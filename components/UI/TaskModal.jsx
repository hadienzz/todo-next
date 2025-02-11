import { useContext, useState } from "react";
import CustomModal from "../Modal/CustomModal";
import InputModal from "../Modal/InputModal";
import FooterModal from "../Modal/FooterModal";
import HeaderModal from "../Modal/HeaderModal";
import { taskContext } from "@/app/context/TaskContextProvider";

const TaskModal = () => {
    const { handleSubmit, error, tasks } = useContext(taskContext)

    return (
        <>
            <CustomModal>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                    <HeaderModal  title={'Add Task'} />

                    <form onSubmit={handleSubmit}>

                        <p className="my-2 text-[#cf4343] font-medium">{error}</p>

                        <InputModal
                            placeholder={'What do you want to do today?'}
                            taller
                            name={'title'}
                        />

                        <InputModal
                            placeholder={'Describe your task here'}
                            name={'description'}
                        />

                        <FooterModal />
                    </form>


                </div>
            </CustomModal>
        </>
    );
};

export default TaskModal;
