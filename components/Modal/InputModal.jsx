

const InputModal = ({ taller, placeholder, name, }) => {
    return (
        <>
            <input
                type="text"
                className={`w-full border-[1px] border-[#979797] rounded-[4px] px-4 py-2 outline-none text-[rgba(255,255,255,.87)] bg-[#363636] ${taller ? 'mt-[14px]' : ''}`}
                placeholder={placeholder}
                name={name}
            />
            <p className="text-[#AFAFAF] mb-2">{name[0].toUpperCase() + name.substring(1)}</p>
        </>
    )
}

export default InputModal