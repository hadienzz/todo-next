import CustomModal from "../UI/CustomModal";
import HeaderModal from "../UI/HeaderModal";

const CategoryModal = () => {
  return (
    <>
      <CustomModal>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white md:w-[40%]  w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">
          <HeaderModal title={"Category Modal"} />
        </div>
      </CustomModal>
    </>
  );
};

export default CategoryModal;
