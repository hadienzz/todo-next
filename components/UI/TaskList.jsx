import React, { useContext } from "react";
import { CATEGORIES_CONTENT } from "../../data";
import priorityIcon from "../../public/priority-icon.png";
import { getTask } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import { taskContext } from "@/app/context/TaskContextProvider";

const TaskList = ({ _id, category, description, priority, title, complete }) => {
  const router = useRouter();
  const selectedCategory = CATEGORIES_CONTENT.find((item) => item.categoryText === category);

  const { handleCompleteTask } = useContext(taskContext)
  return (
    <div className="bg-[#363636]  flex px-[10px] rounded-md max-w-full md:mx-auto md:w-[80%] cursor-pointer">
      <div className="flex items-center pr-3">
        <div className="w-4 h-4 rounded-full grid place-items-center border border-white" onClick={() => handleCompleteTask(id)}>
          <div className={`w-full h-full rounded-full ${complete && 'bg-[white]'}`}></div>
        </div>
      </div>

      <div
        className="flex justify-between w-full h-full py-3 truncate"
        onClick={() => router.push(_id)}
      >
        <div className=" min-w-0 flex-1 ">
          <p className="text-primaryWhite truncate">{title}</p>
          <p className="text-[#AFAFAF] ">{description}</p>
        </div>

        <div className="flex items-end justify-end gap-3 flex-shrink-0">
          <div className="flex gap-[5px] py-1 px-2 border-[1px] border-[#8687E7] rounded-[4px] cursor-pointer">
            <img src={priorityIcon.src} alt={priority} />
            <p>{priority}</p>
          </div>
          <div
            className="flex items-center py-1 px-2 rounded-[4px] gap-[5px] cursor-pointer"
            style={{ backgroundColor: selectedCategory.color }}
          >
            <img
              src={selectedCategory.icon}
              className="w-[16px] h-[16px]"
              alt={selectedCategory.categoryText}
            />
            <p className="text-primaryWhite">{selectedCategory.categoryText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
