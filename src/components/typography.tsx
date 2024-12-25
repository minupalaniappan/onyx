import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { tw } from '@minupalaniappan/brise'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Row } from './layout'

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

export const ButtonLink = (props: PropsWithChildren & { href: string }) => {
  return (
    <Row y="center" className="gap-[2px]">
      <Link
        className="font-light text-md text-gray-600 leading-none whitespace-nowrap hover:underline"
        href={props.href}
      >
        {props.children}
      </Link>
      <ArrowUpRightIcon className="w-3 h-3 stroke  stroke-[3px] stroke-gray-600 relative bottom-[1px]" />
    </Row>
  )
}

export const OverlayHeader = tw.div<PropsWithChildren>`
  font-normal
  text-xl
  text-black
  leading-none
`

export const InputLabel = tw.label<PropsWithChildren>`
  font-normal
  text-sm
  text-gray-600
  leading-none
`
