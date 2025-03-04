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
import useSWR from 'swr'


const App = () => {
  // Semua hook dipanggil di sini, tanpa kondisi
  const { data: session, status } = useSession();
  const { openedModal } = useContext(taskContext)
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: todo = [], error } = useSWR("/api/todo", fetcher);
  const filteredData = session ? todo.filter((data) => data.userId === session.user.id) : [];

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
      {filteredData.length >= 1 ? <SelectedProject todo={filteredData} image={session?.user?.image} /> : <NoProjectsSelected image={session?.user.image} />}
    </>
  );
};

export default App;