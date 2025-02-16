const TaskList = () => {
    return (
        <>
            <div className="bg-[#363636] flex">
                <div className="w-4 h-4">
                    <div className="w-full h-full rounded-full border border-white bg-transparent"></div>
                </div>
                <div className="inline">
                    <p>CONTENT</p>
                    <p>TIME</p>
                </div>
                <div className="flex ">
                    <button>University</button>
                    <p>Priority</p>
                </div>
            </div>
        </>
    )
}

export default TaskList