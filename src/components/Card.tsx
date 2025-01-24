import Image from "next/image"
import { FC } from "react"

interface CardProps {
    id: number
    title: string
    description: string
}

const Card: FC<CardProps> = ({ id, title, description }) => {
    return (
        <div className="card-element w-[358px] lg:w-[412px] h-[212px] lg:h-[256px] bg-[#f0f0f0] rounded-lg p-4 flex flex-col justify-between my-4">
            <div className="flex flex-row items-center justify-between gap-6">
                <Image
                    src={`/${id}.svg`}
                    width={60}
                    height={60}
                    alt={"id"}
                    className="flex lg:hidden"
                />

                <Image
                    src={`/${id}.svg`}
                    width={80}
                    height={80}
                    alt={"id"}
                    className="hidden lg:flex"
                />

                <p
                    style={{ fontSize: "24px", lineHeight: "28px" }}
                    className="flex lg:hidden"
                >
                    {title}
                </p>
            </div>

            <p className="flex lg:hidden text-sm">{description}</p>
            <p
                className="hidden lg:flex"
                style={{ fontSize: "32px", lineHeight: "36px" }}
            >
                {title}
            </p>
        </div>
    )
}

export default Card
