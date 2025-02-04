import { useRef, useState } from "react";
import CustomModal from "../Modal/CustomModal";

const TaskModal = ({ onClose }) => {
    const [tasks, setTasks] = useState([]);
    const [isTitleEditing, setIsTitleEditing] = useState(true);
    const [isDescEditing, setIsDescEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const titleRef = useRef(null);
    const descRef = useRef(null);

    const handleTitle = () => {
        if (titleRef.current) {
            setTitle(titleRef.current.value);
        }

        setIsTitleEditing(false);
        setIsDescEditing(true);
    };

    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-1/4 bg-[#363636] px-6">
                <div className="flex items-center pt-[25px] justify-between">
                    <p className="text-white">Add Task</p>
                    <p className="cursor-pointer text-white" onClick={onClose}>X</p>
                </div>

                {isTitleEditing ? (
                    <input
                        type="text"
                        className="w-full border-[1px] border-[#979797] rounded-[4px] px-4 py-2 outline-none text-[rgba(255,255,255,.87)] bg-[#363636] my-[14px]"
                        placeholder="What do you want to do today?"
                        ref={titleRef}
                    />
                ) : (
                    <p className="text-primaryWhite py-[22px]">{title}</p>
                )}

                {!isDescEditing ? (
                    <p className="text-[#AFAFAF] cursor-pointer" onClick={handleTitle}>
                        Description
                    </p>
                ) : (
                    <input
                        type="text"
                        className="w-full border-[1px] border-[#979797] rounded-[4px] px-4 py-2 outline-none text-[rgba(255,255,255,.87)] bg-[#363636]"
                        placeholder="Describe your task here!"
                        ref={descRef}

                    />
                )}
            </div>
        </CustomModal>
    );
};

export default TaskModal;
