import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Slider test work",
    description: "Test work",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className="w-full h-full"
        >
            <body className={`pp-neue-montreal antialiased w-full h-full`}>
                {children}
            </body>
        </html>
    )
}
