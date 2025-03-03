"use client";

import { useSession } from "next-auth/react";
import StartingPage from "./pages/StartingPage";
import { useContext, useEffect, useState } from "react";
import TaskModal from "../../components/Modal/TaskModal";
import PriorityModal from "../../components/Modal/PriorityModal";
import { taskContext } from "./context/TaskContextProvider";
import CategoryModal from "../../components/Modal/CategoryModal";
import NoProjectsSelected from "./pages/NoProjectsSelected";
import SelectedProject from "./pages/SelectedProject";

const App = () => {
  // Semua hook dipanggil di sini, tanpa kondisi
  const [todo, setTodos] = useState([]);
  const { data: session, status } = useSession();
  const { openedModal } = useContext(taskContext)

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("/api/todo", {
        cache: "no-store",
      });
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const data = await res.json();
      setTodos(data)
    }


    fetchTodos();
  }, [])

  console.log(todo)

  todo.filter((data) => data.id === session?.user?.id)

  if (status === "loading") {
    return <div className="w-screen h-screen bg-[#121212]">...</div>;
  }

  if (!session) {
    return <StartingPage />;
  }

  return (
    <>
      {openedModal === "task" && <TaskModal />}
      {openedModal === "priority" && <PriorityModal />}
      {openedModal === "category" && <CategoryModal />}
      {<NoProjectsSelected image={session?.user.image} />}
    </>
  );
};

export default App;
