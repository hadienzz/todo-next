import { DATA_PRIORITY } from "@/app/lib/data"
import CustomModal from "../Modal/CustomModal"
import HeaderModal from "../Modal/HeaderModal"
import PriorityList from "../Modal/PriorityList"

const PriorityModal = () => {
    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <HeaderModal title='Priority' />

                <div className="grid grid-cols-4 gap-y-4 items-center justify-center mt-[22px]">
                    {DATA_PRIORITY.map((item, idx) => (
                        <PriorityList key={idx} {...item} />
                    ))}
                </div>

                <footer className="flex items-center justify-center gap-[15px] mt-4">
                    <button className="text-[#8687E7] w-[143px] pt-3 px-6">Cancel</button>
                    <button className="bg-[#8687E7] w-[153px] py-3 px-6 rounded-[4px] text-white ">Save</button>
                </footer>

            </div>
        </CustomModal>
    )
}

export default PriorityModal