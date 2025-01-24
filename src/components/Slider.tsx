import { FC } from "react"
import Point from "./Point"

interface SliderProps {
    count: number
    onChange: (id: number) => void
    selected: number
}

const Slider: FC<SliderProps> = ({ count, onChange, selected }) => {
    const keys = []

    for (let i = 0; i < count; i++) {
        keys.push(i)
    }

    return (
        <div className="h-2 flex flex-row gap-2 my-2">
            {keys.map((key) => (
                <Point
                    key={key}
                    isSelected={key == selected}
                    onClick={() => {
                        onChange(key)
                    }}
                />
            ))}
        </div>
    )
}

export default Slider
