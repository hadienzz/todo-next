import { useContext } from "react";
import Header from "../../../components/Header.jsx/Header";
import SearchTask from "../../../components/UI/SearchTask";
import ArrowIcon from "../../../components/icons/ArrowIcon";
import { taskContext } from "../context/TaskContextProvider";
import TaskList from "../../../components/UI/TaskList";
import Footer from "../../../components/UI/Footer";

const SelectedProject = ({ image }) => {
  const { tasks } = useContext(taskContext);
  console.log(tasks.task)
  return (
    <main className="w-screen h-screen bg-[#121212] text-white px-6">
      <Header image={image} title={"Index"} />

      <SearchTask />

      <div className="inline-flex items-center gap-2 my-5 bg-[rgba(255,255,255,0.21)] px-2 rounded-md cursor-pointer">
        <p className="  py-1 bg-gray-700 rounded-md ">Today</p>

        <ArrowIcon />
      </div>

      <div className="grid gap-4">
        {tasks.task.map((item, idx) => (
          <TaskList {...item} key={idx} />
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default SelectedProject;
