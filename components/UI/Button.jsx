const Button = ({ children, icon, ...props }) => {
    return (
        <button className="border-2 py-3 border-[#8E7CFF] rounded-[4px] w-full text-white flex items-center justify-center gap-[10px]" {...props} > {icon} {children}</button>
    )
}

export default Button