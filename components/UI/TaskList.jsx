import React from 'react'
import { CATEGORIES_CONTENT } from '../../data'
import priorityIcon from '../../public/priority-icon.png'
import { getTask } from '@/app/lib/action'
import { useRouter } from 'next/navigation'


const TaskList = ({ id, category, description, priority, title }) => {
    const router = useRouter()
    const selectedCategory = CATEGORIES_CONTENT.find((item) => item.categoryText === category)

    return (
        <div className="bg-[#363636] py-3 scroll-pb-10 flex px-[10px] rounded-md max-w-full justify-between md:mx-auto md:w-[80%] cursor-pointer overflow-hidden" onClick={() => router.push(id)} >
            <div className='flex  min-w-0'>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full border border-white"></div>
                </div>
                <div className="pl-3 min-w-0 flex-1 ">
                    <p className="text-primaryWhite truncate">{title}</p>
                    <p className="text-[#AFAFAF] ">{description}</p>
                </div>
            </div>
            <div className='flex items-end justify-end gap-3 flex-shrink-0'>
                <div className='flex gap-[5px] py-1 px-2 border-[1px] border-[#8687E7] rounded-[4px] cursor-pointer'>
                    <img src={priorityIcon.src} alt={priority} />
                    <p>{priority}</p>
                </div>
                <div className='flex items-center py-1 px-2 rounded-[4px] gap-[5px] cursor-pointer' style={{ backgroundColor: selectedCategory.color }}>
                    <img src={selectedCategory.icon} className='w-[16px] h-[16px]' alt={selectedCategory.categoryText} />
                    <p className='text-primaryWhite'>{selectedCategory.categoryText}</p>
                </div>

            </div>
        </div >
    )
}


export default TaskList