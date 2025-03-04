import { notFound } from "next/navigation";
import { getTaskById } from "../lib/findById";
import TaskDetailClient from "../../../components/UI/TaskDetailClient";

const TaskDetail = async ({ params }) => {
  const { taskSlug } = params
  const task = await getTaskById(taskSlug)

  return (

    <TaskDetailClient task={task} />
  );
};

export default TaskDetail;
