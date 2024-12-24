import { tw } from '@minupalaniappan/brise'
import { PropsWithChildren } from 'react'

export const CardHeader = tw.div<PropsWithChildren>`
  font-normal
  text-xl
  text-black
  leading-none
`

export const CardDescription = tw.div<PropsWithChildren>`
  font-light
  text-lg
  text-gray-600
  leading-none
`

export const PaginatorText = tw.div<PropsWithChildren>`
  font-light
  text-sm
  text-black
  leading-none
  whitespace-nowrap
`
