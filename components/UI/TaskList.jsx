import priorityIcon from '../../public/priority-icon.png'

const TaskList = ({ id, category, description, priority, title }) => {


    return (
        <>
            <div className="bg-[#363636] flex px-[10px] rounded-md w-full ">
                <div className='py-3 flex'>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-white"></div>
                    </div>
                    <div className="inline pl-3">
                        <p className="text-primaryWhite">{title}</p>
                        <p className="text-[#AFAFAF]">Today, At 16:45</p>
                    </div>
                </div>
                <div className='flex items-end justify-end flex-1'>
                    <div className='flex gap-[5px] py-1 px-2 border-[1px] border-[#8687E7] rounded-[4px]'>
                        <img src={priorityIcon.src} alt={priority} />
                        <p>{priority}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList