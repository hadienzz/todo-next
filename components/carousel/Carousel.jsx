const Carousel = ({ children: slides }) => {
    return (
        <>
            <div className="overflow-hidden w-full flex">
                <div className="flex">{slides}</div>
            </div>
        </>
    )
}

export default Carousel