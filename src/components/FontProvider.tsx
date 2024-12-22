import localFont from "next/font/local"
import React, { ReactElement } from "react"

const lausanne = localFont({
  src: [
    {
      path: "../../public/fonts/TWK Lausanne 300.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/TWK Lausanne 400.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/TWK Lausanne 500.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/TWK Lausanne 600.ttf",
      weight: "600",
    },
  ],
})

export const FontProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>): ReactElement => {
  return <div className={`${lausanne.className}`}>{children}</div>
}

export default FontProvider
