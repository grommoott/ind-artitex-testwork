"use client"

import { cardsData } from "./cardsData"
import Header from "@/components/Header"
import CardsWidget from "@/components/CardsWidget"

export default function Home() {
    return (
        <>
            <Header />

            <div className="mx-4 h-full">
                <div className="flex flex-row">
                    <h1
                        className="text-[#8977F3] pb-[10px] pt-[7px] grow flex lg:hidden"
                        style={{ fontSize: "26px", lineHeight: "28px" }}
                    >
                        1.0
                    </h1>
                    <h1
                        className="text-[#8977F3] pb-[10px] pt-[7px] grow hidden lg:flex"
                        style={{ fontSize: "40px", lineHeight: "44px" }}
                    >
                        1.0
                    </h1>

                    <h2
                        className="text-[#8977F3] pt-[10px] hidden lg:flex grow-[4]"
                        style={{ fontSize: "40px", lineHeight: "44px" }}
                    >
                        Наши услуги
                    </h2>
                </div>

                <div className="w-full h-[1px] bg-[#e1e1e1]" />

                <h2
                    className="text-[#8977F3] pt-[10px] contents lg:hidden"
                    style={{ fontSize: "26px", lineHeight: "28px" }}
                >
                    Наши услуги
                </h2>

                <div className="pb-10 contents lg:hidden" />

                <CardsWidget cardsData={cardsData} />
            </div>
        </>
    )
}
