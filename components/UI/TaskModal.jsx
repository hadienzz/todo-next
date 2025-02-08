import { useState } from "react";
import CustomModal from "../Modal/CustomModal";
import InputModal from "../Modal/InputModal";
import FooterModal from "../Modal/FooterModal";

const TaskModal = ({ onClose }) => {
    const [error, setError] = useState(null)
    const [tasks, setTasks] = useState({
        task: []
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const enteredTitle = formData.get('title')
        const enteredDescription = formData.get('description')

        if (!enteredTitle || !enteredDescription) {
            setError('Failed to add data due incomplete data')
        }

        setTasks((prevState) => {
            const newTask = {
                id: crypto.randomUUID(),
                title: enteredTitle,
                description: enteredDescription
            }

            return {
                ...prevState,
                task: [...tasks.task, newTask]
            }
        })
        event.target.reset()
    }


    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <div className="flex items-center justify-between">
                    <p className="text-white">Add Task</p>
                    <p className="cursor-pointer text-white" onClick={onClose}>X</p>
                </div>

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
    );
};

export default TaskModal;
