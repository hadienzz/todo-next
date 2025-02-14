import { CATEGORIES_CONTENT } from "../../data";
import CategoryList from "../UI/CategoryList";
import CustomModal from "../UI/CustomModal";
import HeaderModal from "../UI/HeaderModal";

const CategoryModal = () => {
  return (
    <>
      <CustomModal>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white md:w-[40%]  w-full h-auto py-[25px] bg-[#363636] px-6 rounded-md">
          <HeaderModal title={"Category Modal"} />
          <main className="grid grid-cols-4 mt-4 mb-[42px]">
            {CATEGORIES_CONTENT.map((item, idx) => (
              <CategoryList {...item} key={idx} />
            ))}
          </main>
          <button className="w-full text-white bg-[#8687E7] py-3 px-6 ">Add Category</button>
        </div>
      </CustomModal>
    </>
  );
};

export default CategoryModal;
