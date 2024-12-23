import type { Preview } from '@storybook/react'
import '@/styles/globals.css'
import localFont from 'next/font/local'
import React from 'react'

const lausanne = localFont({
  src: [
    {
      path: '../public/fonts/TWK Lausanne 300.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/TWK Lausanne 400.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/TWK Lausanne 500.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/TWK Lausanne 600.ttf',
      weight: '600',
    },
  ],
})


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
      <main className={lausanne.className}>
        <Story />
      </main>
    ),
  ],
}

export default preview
