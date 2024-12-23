import type { Preview } from '@storybook/react'
import '@/styles/globals.css'
import localFont from 'next/font/local'
import React from 'react'


const lausanne300 = localFont({
  src: '../public/fonts/TWK Lausanne 300.ttf',
  variable: "--font-lausanne",
  weight: "300",
})

const lausanne400 = localFont({
  src: '../public/fonts/TWK Lausanne 400.ttf',
  variable: "--font-lausanne",
  weight: "400",
})

const lausanne500 = localFont({
  src: '../public/fonts/TWK Lausanne 500.ttf',
  variable: "--font-lausanne",
  weight: "500",
})

const lausanne600 = localFont({
  src: '../public/fonts/TWK Lausanne 600.ttf',
  variable: "--font-lausanne",
  weight: "600",
})

const localFontClassNames = [
  lausanne300.variable,
  lausanne400.variable,
  lausanne500.variable,
  lausanne600.variable,
].join(" ")


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={localFontClassNames}>
        <Story />
      </main>
    ),
  ],
}

export default preview
