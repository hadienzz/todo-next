import { useActionState } from "react";
import CustomModal from "../Modal/CustomModal";
import InputModal from "../Modal/InputModal";
import FooterModal from "../Modal/FooterModal";
import { addTask } from "@/app/lib/action";

const TaskModal = ({ onClose }) => {

    const [state, formAction] = useActionState(addTask, { message: null })


    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <div className="flex items-center justify-between">
                    <p className="text-white">Add Task</p>
                    <p className="cursor-pointer text-white" onClick={onClose}>X</p>
                </div>

                <form action={formAction}>

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
    );
};

export default TaskModal;
