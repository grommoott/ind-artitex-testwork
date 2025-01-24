"use client"

import { FC, useMemo, useReducer, useRef } from "react"
import Card from "./Card"

interface CardsProps {
    cardsData: { description: string; title: string; id: number }[]
    offset: number
    pagesCount: number
    cardWidth: number
    gapSize: number
}

const Cards: FC<CardsProps> = ({
    cardsData,
    offset,
    pagesCount,
    cardWidth,
    gapSize,
}) => {
    const style: any = { gap: gapSize }

    if (offset == pagesCount - 1) {
        style.left =
            -(cardsData.length * (cardWidth + gapSize) - gapSize) +
            (document.querySelector(".cards-element")?.clientWidth || 0)
    } else {
        style.left = -(cardWidth + gapSize) * offset
    }

    return (
        <div className="cards-element flex flex-row relative w-full h-full overflow-x-hidden">
            <div
                className="flex flex-row absolute duration-200 overflow-visible"
                style={style}
            >
                {cardsData.map((card) => (
                    <Card
                        {...card}
                        key={card.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards
