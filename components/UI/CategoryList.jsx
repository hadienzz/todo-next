import { taskContext } from "@/app/context/TaskContextProvider"
import { useContext } from "react"

const CategoryList = ({ icon, categoryText, color }) => {
    const { category, handleSelectCategory } = useContext(taskContext)

    return (
        <li className={`flex flex-col justify-center items-center text-white cursor-pointer ${category === categoryText ? 'border-[1px] border-white' : ''}`} onClick={() => handleSelectCategory(categoryText)}>
            <div className={`bg-[${color}] rounded-[4px] grid place-items-center p-4  `}
                style={{ backgroundColor: color }}
            >
                <img src={icon} alt={categoryText} />
            </div>
            <p className="mt-2">{categoryText}</p>
        </li>
    )
}

export default CategoryList