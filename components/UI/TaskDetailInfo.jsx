const TaskDetailInfo = ({
  icon,
  title,
  description,
  categoryIcon,
  deleteTask,
  ...props
}) => {
  return (
    <>
      <div className="flex justify-between" {...props}>
        <div className="flex gap-2 text-primaryWhite">
          <img src={icon.src} className="w-6 h-6" alt="" />
          <p>{title}</p>
        </div>
        {!deleteTask && (
          <div className="inline-flex justify-center items-center px-4 py-2 bg-[rgba(255,255,255,0.21)] text-primaryWhite rounded-md gap-[10px]">
            {categoryIcon && (
              <img src={categoryIcon} className="w-6 h-6 " alt="" />
            )}
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskDetailInfo;
