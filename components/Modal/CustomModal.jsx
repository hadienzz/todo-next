'use client'

import { useState } from "react"
import { createPortal } from "react-dom"

const CustomModal = ({ children, ...props }) => {
    const [render, setIsRender] = useState(false)

    return (
        createPortal(
            <div className="absolute inset-0 bg-[rgba(0,0,0,.74)] z-50">{children}</div>, document.body
        )
    )
}

export default CustomModal