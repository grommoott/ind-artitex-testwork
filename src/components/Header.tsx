import Image from "next/image"
import { FC } from "react"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <header
            style={{ border: "solid 1px #e1e1e1", borderWidth: "1px 0 1px 0" }}
            className="h-[60px] flex flex-row items-center p-4 justify-between"
        >
            <div className="grow-0 lg:grow">
                <button className="h-7 w-7 lg:w-[108px] flex flex-row items-center justify-between">
                    <Image
                        src={"/logo.svg"}
                        height={28}
                        width={28}
                        alt="logo"
                    />

                    <p
                        className="hidden lg:flex text-[16px]"
                        style={{ lineHeight: "20px" }}
                    >
                        STEMPS
                    </p>
                </button>
            </div>

            <button
                className="bg-[#121212] flex lg:hidden text-[16px] py-1 px-1.5 text-[#f3f3f3] rounded-lg"
                style={{ lineHeight: "20px" }}
            >
                Меню
            </button>

            <div className="grow-[4] hidden lg:flex flex-row items-center justify-between">
                <div
                    className="flex flex-row items-center gap-6 text-[#151515] text-[16px]"
                    style={{ lineHeight: "24px" }}
                >
                    <a>О школе</a>
                    <a>Курсы</a>
                    <a>Библиотека</a>
                </div>

                <button className="flex flex-row items-center gap-4">
                    <p
                        className="text-[16px]"
                        style={{ lineHeight: "24px" }}
                    >
                        Вход
                    </p>
                    <Image
                        src={"/login.svg"}
                        alt="login"
                        width={30}
                        height={28}
                    />
                </button>
            </div>
        </header>
    )
}

export default Header
