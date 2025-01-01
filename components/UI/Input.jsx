const Input = ({ label, placeholder, type }) => {
    return (
        <>
            <div className="text-white ">
                <label htmlFor="" className="">{label}</label>
                <input type={type} className="w-full bg-[#1D1D1D] border-[0.8px] border-[white] p-3" placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input