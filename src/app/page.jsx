"use client";

import { useSession } from "next-auth/react";
import StartingPage from "./pages/StartingPage";
import Image from "next/image";
import Footer from "../../components/UI/Footer";
import { useContext } from "react";
import TaskModal from "../../components/Modal/TaskModal";
import PriorityModal from "../../components/Modal/PriorityModal";
import { taskContext } from "./context/TaskContextProvider";
import CategoryModal from "../../components/Modal/CategoryModal";
import NoProjectsSelected from "./pages/NoProjectsSelected ";

const App = () => {
  const { openedModal } = useContext(taskContext);


  const { data: session, status } = useSession();

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
      <NoProjectsSelected image={session?.user.image} />
    </>
  );
};

export default App;
