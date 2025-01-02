import React from 'react'
import { Row } from './layout'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { PaginatorText } from './typography'
import { cn } from '../lib/utils'

type PaginatorProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Paginator = (props: PaginatorProps) => {
  return (
    <Row grow y="center" className="h-[40px]">
      <div
        className={cn(
          'cursor-pointer border-r border-t border-black h-full w-[40px] flex items-center justify-center hover:bg-gray-100',
          props.page === 1 ? 'pointer-events-none' : '',
        )}
        onClick={() => props.onPageChange(props.page - 1)}
      >
        <ChevronLeftIcon
          className={cn(
            'w-4 h-4 stroke-2',
            props.page === 1 ? 'opacity-50' : '',
          )}
        />
      </div>
      <div className="border-t border-black border-r flex items-center justify-center h-full px-4">
        <PaginatorText>
          Page {props.page} of {props.totalPages}
        </PaginatorText>
      </div>
      <div
        className={cn(
          'cursor-pointer border-r border-t border-black h-full w-[40px] flex items-center justify-center hover:bg-gray-100',
          props.page === props.totalPages ? 'pointer-events-none' : '',
        )}
        onClick={() => props.onPageChange(props.page + 1)}
      >
        <ChevronRightIcon
          className={cn(
            'w-4 h-4 stroke-2',
            props.page === props.totalPages ? 'opacity-50' : '',
          )}
        />
      </div>
    </Row>
  )
}

export default Paginator
