const Input = ({ label, placeholder, type, name }) => {
    return (
        <>
            <div className="text-white grid gap-2 ">
                <label htmlFor="" className="">{label}</label>
                <input type={type} className="w-full bg-[#1D1D1D] border-[0.8px] border-[#979797] p-3 outline-none" name={name} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input