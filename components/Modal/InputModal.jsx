import { forwardRef } from "react"


const InputModal = forwardRef(({ isDesc, taller, placeholder, isEdit, handleCancelTitle, title, ...props }, ref) => {
    return isEdit ? (
        <input
            type="text"
            className={`w-full border-[1px] border-[#979797] rounded-[4px] px-4 py-2 outline-none text-[rgba(255,255,255,.87)] bg-[#363636] ${taller ? 'my-[14px]' : ''}`}
            placeholder={placeholder}
            ref={ref}
        />
    ) : (
        <p className={`${isDesc ? 'text-[#AFAFAF]' : ' text-primaryWhite py-[22px]'}`} {...props}>
            {!isDesc ? title : 'Description'}
        </p>
    );
});

export default InputModal