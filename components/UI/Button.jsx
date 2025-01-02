const Button = ({ children }) => {
    return (
        <button className="border-2 py-3 border-[#8E7CFF] rounded-[4px] w-full text-white" >
            {children}
        </button>
    )
}

export default Button