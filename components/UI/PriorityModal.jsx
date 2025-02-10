import CustomModal from "../Modal/CustomModal"
import HeaderModal from "../Modal/HeaderModal"

const PriorityModal = ({ onClose }) => {
    return (
        <CustomModal>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white sm:w-[80%] w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">

                <HeaderModal onClose={onClose} title={'Priority'} />

            </div>
        </CustomModal>
    )
}

export default PriorityModal