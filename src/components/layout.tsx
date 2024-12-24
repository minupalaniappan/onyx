import { tw } from '@minupalaniappan/brise'
import { PropsWithChildren } from 'react'

export type ColumnProps = PropsWithChildren & {
  gap?: number
  grow?: boolean
  x?: 'left' | 'center' | 'right'
  y?: 'top' | 'center' | 'bottom'
  wGrow?: boolean
  className?: string
}

export const Column = tw.div<ColumnProps>`
  flex flex-col

  ${({ grow = false }) => (grow ? 'flex-grow' : '')}
  ${({ wGrow = false }) => (wGrow ? 'w-full' : '')}


  ${({ x = 'left' }: RowProps) => {
    if (x === 'left') return 'items-start'
    if (x === 'center') return 'items-center'
    if (x === 'right') return 'items-end'
    else return ''
  }}

  ${({ y = 'top' }: RowProps) => {
    if (y === 'top') return 'justify-start'
    if (y === 'center') return 'justify-center'
    if (y === 'bottom') return 'justify-end'
    else return ''
  }}
`

export type RowProps = PropsWithChildren & {
  grow?: boolean
  hGrow?: boolean
  x?: 'left' | 'center' | 'right'
  y?: 'top' | 'center' | 'bottom'
  className?: string
  between?: boolean
  onClick?: () => void
}

export const Row = tw.div<RowProps>`
  !flex !flex-row

  ${({ x = 'left' }: RowProps) => {
    if (x === 'left') return 'justify-start'
    if (x === 'center') return 'justify-center'
    if (x === 'right') return 'justify-end'
    else return ''
  }}

  ${({ y = 'top' }: RowProps) => {
    if (y === 'top') return 'items-start'
    if (y === 'center') return 'items-center'
    if (y === 'bottom') return 'items-end'
    else return ''
  }}

  ${({ grow = false }) => (grow ? '!flex-grow' : '')}
  ${({ hGrow = false }) => (hGrow ? 'h-full' : '')}
  ${({ between = false }) => (between ? 'justify-between' : '')}

`

export const PaddedDisplay = tw.div<PropsWithChildren>`
  flex
  flex-col
  max-w-4xl
  mx-auto
  h-full
  p-4
`
