

const InputModal = ({ placeholder, name, }) => {
    return (
        <>
            <p className="text-[#AFAFAF]  ">{name[0].toUpperCase() + name.substring(1)}</p>
            <input
                type="text"
                className={`w-full border-[1px] border-[#979797] rounded-[4px] px-4 py-2 outline-none text-[rgba(255,255,255,.87)] bg-[#363636] mb-2`}
                placeholder={placeholder}
                name={name}
            />
        </>
    )
}

export default InputModal