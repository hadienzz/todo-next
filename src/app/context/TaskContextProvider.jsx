import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const taskContext = createContext({
  tasks: {},
  openedModal: false,
  priority: null,
  category: null,
  taskId: null,
  handleAddCategory: () => { },
  handleTask: () => { },
  handleAddTask: () => { },
  modalHandler: () => { },
  handleCloseModal: () => { },
  handleAddPriority: () => { },
  handleSelectCategory: () => { },
  handleDeleteTask: () => { },
  handleCompleteTask: () => { }
});

const TaskContextProvider = ({ children }) => {
  const [openedModal, setOpenedModal] = useState(false);
  const [priority, setPriority] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [currentTask, setCurrentTask] = useState({});
  const [tasks, setTasks] = useState({
    task: [],
  });

  const router = useRouter();

  const handleTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const enteredTitle = formData.get("title");
    const enteredDescription = formData.get("description");

    if (!enteredTitle || !enteredDescription) {
      setError("Failed to add data due incomplete data");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: enteredTitle,
      description: enteredDescription,
      complete: false
    };

    setCurrentTask(newTask);

    modalHandler("category");
  };

  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  const modalHandler = (type) => {
    setOpenedModal(type);
  };

  const handleCloseModal = () => {
    setOpenedModal(false);
    setPriority(null);
  };

  const handleAddPriority = (num) => {
    setPriority(num);
  };

  const handleAddCategory = () => {
    const newTask = {
      ...currentTask,
      category: category,
    };

    if (!newTask.category) {
      throw new Error("Please add priority first");
    }

    setCurrentTask(newTask);
    modalHandler("priority");
  };


  const handleAddTask = () => {
    const newTask = {
      ...currentTask,
      priority: priority,
    };

    if (!newTask.priority) {
      throw new Error("Please add your priority first");
    }

    setTasks((prevState) => ({
      ...prevState,
      task: [...prevState.task, newTask],
    }));
    handleCloseModal();
  };

  const handleDeleteTask = (id) => {
    setTasks((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((item) => item.id !== id),
      };
    });

    router.back();
  };

  const handleCompleteTask = (id) => {
    setTasks((prevState) => {
      return {
        ...prevState,
        task: prevState.task.map((item) => (
          item.id === id ? { ...item, complete: true } : item
        ))
      }
    })

  }



  const contextValue = {
    openedModal,
    priority,
    error,
    tasks,
    handleTask,
    modalHandler,
    handleCloseModal,
    handleAddPriority,
    handleAddCategory,
    category,
    handleSelectCategory,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask
  };

  return (
    <taskContext.Provider value={contextValue}>{children}</taskContext.Provider>
  );
};

export default TaskContextProvider;
