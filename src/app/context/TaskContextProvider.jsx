import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const taskContext = createContext({
  openedModal: false,
  priority: null,
  category: null,
  taskId: null,
  isEditing: false,
  handleAddCategory: () => { },
  handleTask: () => { },
  handleAddTask: () => { },
  modalHandler: () => { },
  handleCloseModal: () => { },
  handleAddPriority: () => { },
  handleSelectCategory: () => { },
  handleDeleteTask: () => { },
  handleCompleteTask: () => { },
  handleEditTask: () => { },
});

const TaskContextProvider = ({ children }) => {
  const [openedModal, setOpenedModal] = useState(false);
  const [priority, setPriority] = useState(null);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [currentTask, setCurrentTask] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { data: session } = useSession();

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
      userId: session?.user?.id,
      title: enteredTitle,
      description: enteredDescription,
      complete: false,
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

  const handleAddTask = async () => {
    const newTask = {
      ...currentTask,
      priority: priority,
    };

    if (!newTask.priority) {
      throw new Error("Please add your priority first");
    }

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    handleCloseModal();
  };

  const handleDeleteTask = async (id) => {
    const res = await fetch('api/todo', {
      method: "DELETE",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({ id })
    })

    router.back()
  };

  const handleCompleteTask = async (id) => {
    const res = await fetch('api/todo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, complete: true })
    })

    if (!res.ok) {
      throw new Error('Failed to update complete data')
    }
    const data = await res.json()
    console.log('Task Compeleted', data)
  };

  const handleEditTask = (id) => {
    setIsEditing((prevState) => !prevState);
  };

  const contextValue = {
    openedModal,
    priority,
    error,
    handleTask,
    modalHandler,
    handleCloseModal,
    handleAddPriority,
    handleAddCategory,
    category,
    handleSelectCategory,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask,
    handleEditTask,
    isEditing,
  };

  return (
    <taskContext.Provider value={contextValue}>{children}</taskContext.Provider>
  );
};

export default TaskContextProvider;
