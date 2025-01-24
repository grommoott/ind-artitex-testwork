import { FC, useCallback, useEffect, useState } from "react"
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

    useEffect(() => {
        window.addEventListener("resize", updateCardWidth)

        updateCardWidth()

        return () => window.removeEventListener("resize", updateCardWidth)
    }, [])

    return (
        <>
            <Slider
                count={
                    cardsData.length -
                    Math.floor(window.innerWidth / (cardWidth + gapSize)) +
                    1
                }
                onChange={setOffset}
                selected={offset}
            />

            <Cards
                cardsData={cardsData}
                offset={offset}
                pagesCount={
                    cardsData.length -
                    Math.floor(window.innerWidth / (cardWidth + gapSize)) +
                    1
                }
                cardWidth={cardWidth}
                gapSize={gapSize}
            />
        </>
    )
}

export default CardsWidget
