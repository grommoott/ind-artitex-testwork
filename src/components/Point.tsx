"use client"
import { FC } from "react"

interface PointProps {
    isSelected: boolean
    onClick: () => void
}

const Point: FC<PointProps> = ({ isSelected, onClick }) => {
    return (
        <span
            className={`h-2 ${isSelected ? "w-10" : "w-2"} rounded-full overflow-visible duration-200 bg-[#cccccc] relative`}
            onClick={onClick}
        >
            <span
                className={`h-2 ${isSelected ? "w-5 opacity-100" : "w-0 opacity-0"} rounded-full duration-200 bg-[#1c1c1c] absolute`}
            ></span>
        </span>
    )
}

export default Point
