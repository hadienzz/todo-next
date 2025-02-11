const { createContext, useState } = require("react");


export const taskContext = createContext({
    tasks: {},
    openedModal: false,
    priority: null,
    handleSubmit: () => { },
    handleAddTask: () => { },
    modalHandler: () => { },
    handleCloseModal: () => { },
    handleAddPriority: () => { },
})

const TaskContextProvider = ({ children }) => {
    const [openedModal, setOpenedModal] = useState(false)
    const [priority, setPriority] = useState(null)
    const [error, setError] = useState(null)
    const [currentTask, setCurrentTask] = useState({})
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
            return
        }

        const newTask = {
            id: crypto.randomUUID(),
            title: enteredTitle,
            description: enteredDescription,
            priority: priority
        }

        modalHandler('priority')
    }

    const modalHandler = (type) => {
        setOpenedModal(type)
    }

    const handleCloseModal = () => {
        setOpenedModal(false)
    }

    const handleAddPriority = (num) => {
        setPriority(num)


    }

    const handleAddTask = (data, callback) => {
        setTasks((prevState) => {
            const updatedTasks = {
                ...prevState,
                task: [...prevState.task, data]
            };

            return updatedTasks;
        });
    };

    const contextValue = {
        openedModal,
        priority,
        error,
        tasks,
        handleSubmit,
        modalHandler,
        handleCloseModal,
        handleAddPriority,
        handleAddTask
    }



    return (
        <taskContext.Provider value={contextValue}>{children}</taskContext.Provider>
    )
}

export default TaskContextProvider