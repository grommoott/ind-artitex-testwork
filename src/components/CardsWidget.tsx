"use client"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import Slider from "./Slider"
import Cards from "./Cards"

interface CardsWidgetProps {
    cardsData: { id: number; title: string; description: string }[]
}

const CardsWidget: FC<CardsWidgetProps> = ({ cardsData }) => {
    const [offset, setOffset] = useState(0)
    const [cardWidth, setCardWidth] = useState(1)
    const gapSize = 16

    const updateCardWidth = useCallback(() => {
        setCardWidth(document.querySelector(".card-element")?.scrollWidth || 0)
    }, [setCardWidth])

    const [pagesCount, setPagesCount] = useState(0)

    useEffect(() => {
        setPagesCount(
            cardsData.length -
                Math.floor(window.innerWidth / (cardWidth + gapSize)) +
                1,
        )
    }, [cardWidth, gapSize])

    useEffect(() => {
        window.addEventListener("resize", updateCardWidth)

        updateCardWidth()

        return () => window.removeEventListener("resize", updateCardWidth)
    }, [])

    return (
        <>
            <Slider
                count={pagesCount}
                onChange={setOffset}
                selected={offset}
            />

            <Cards
                cardsData={cardsData}
                offset={offset}
                pagesCount={pagesCount}
                cardWidth={cardWidth}
                gapSize={gapSize}
            />
        </>
    )
}

export default CardsWidget
