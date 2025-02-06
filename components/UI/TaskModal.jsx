import { useRef, useState } from "react";
import CustomModal from "../Modal/CustomModal";
import InputModal from "../Modal/InputModal";
import FooterModal from "../Modal/FooterModal";


const TaskModal = ({ onClose }) => {
    const [tasks, setTasks] = useState([]);

    const [isTitleEditing, setIsTitleEditing] = useState(true);
    const [isDescEditing, setIsDescEditing] = useState(false);
    const [title, setTitle] = useState("");

    const titleRef = useRef(null);
    const descRef = useRef(null);

    const handleInput = () => {
        const enteredTitle = titleRef.current.value

        if (enteredTitle.trim().length < 3) {
            throw new Error('Failed to add task')
        }

        setTitle(enteredTitle);
        setIsTitleEditing(false);
        setIsDescEditing(true);
    };

    const handleSubmit = () => {
        if (!titleRef.current || !descRef.current) {
            console.error("Title or Description input is not available");
            return;
        }

        const enteredTitle = titleRef.current
        const enteredDesc = descRef.current
    }

    const handleCancelTitle = () => {
        setIsTitleEditing(true)
        setIsDescEditing(false)
    }

    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px]  bg-[#363636] px-6 rounded-md">

                <div className="flex items-center justify-between">
                    <p className="text-white">Add Task</p>
                    <p className="cursor-pointer text-white" onClick={onClose}>X</p>
                </div>

                <form action="">
                    <InputModal
                        isEdit={isTitleEditing}
                        placeholder={'What do you want to do today?'}
                        ref={titleRef}
                        title={title}
                        onClick={handleCancelTitle}
                        taller
                    />

                    <InputModal
                        isDesc
                        onClick={handleInput}
                        isEdit={isDescEditing}
                        placeholder={'Describe your task here'}
                        ref={descRef}
                        title="Description"
                    />

                </form>

                <FooterModal handleSubmit={handleSubmit} />

            </div>
        </CustomModal>
    );
};

export default TaskModal;
