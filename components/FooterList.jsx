const FooterList = ({ icon, label }) => {
    return (
        <li className="list-none grid place-items-center cursor-pointer">
            {icon}
            {label}
        </li>
    )
}

export default FooterList