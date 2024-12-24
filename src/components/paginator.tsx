import React from 'react'
import { Row } from './layout'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { PaginatorText } from './typography'

type PaginatorProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Paginator = (props: PaginatorProps) => {
  return (
    <Row grow y="center" className="h-[40px]">
      <div className="cursor-pointer border-r border-t border-black h-full">
        <ChevronLeftIcon className="w-4 h-4 stroke-2" />
      </div>
      <div className="border-t border-black h-full">
        <PaginatorText>
          Page {props.page} of {props.totalPages}
        </PaginatorText>
      </div>
      <div className="cursor-pointer border-r border-t border-black h-full">
        <ChevronRightIcon className="w-4 h-4 stroke-2" />
      </div>
    </Row>
  )
}

export default Paginator
