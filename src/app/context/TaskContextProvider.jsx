const { createContext, useState } = require("react");


export const taskContext = createContext({
    tasks: {},
    openedModal: false,
    priority: null,
    handleTask: () => { },
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
    const [isActive, setIsActive] = useState(false)
    const [tasks, setTasks] = useState({
        task: []
    })

    const handleTask = (event) => {
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
        }

        setCurrentTask(newTask)

        modalHandler('priority')
    }


    const modalHandler = (type) => {
        setOpenedModal(type)
    }

    const handleCloseModal = () => {
        setOpenedModal(false)
        setPriority(null)
    }

    const handleAddPriority = (num) => {
        setPriority(num)
        setIsActive(true)
    }

    const handleAddTask = () => {
        const newTask = {
            ...currentTask,
            priority: priority
        }

        if (!newTask.priority) {
            throw new Error('Please add priority first')
        }

        setTasks((prevState) => ({
            ...prevState,
            task: [...prevState.task, newTask]
        }))
        
        handleCloseModal()
    };
    console.log(tasks)

    const contextValue = {
        openedModal,
        priority,
        error,
        tasks,
        handleTask,
        modalHandler,
        handleCloseModal,
        handleAddPriority,
        handleAddTask,
        isActive
    }



    return (
        <taskContext.Provider value={contextValue}>{children}</taskContext.Provider>
    )
}

export default TaskContextProvider