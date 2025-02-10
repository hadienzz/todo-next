const HeaderModal = ({ title, onClose }) => {
    return (
        <div className="flex items-center justify-between">
            <p className="text-white">{title}</p>
            <p className="cursor-pointer text-white" onClick={onClose}>X</p>
        </div>

    )
}

export default HeaderModal