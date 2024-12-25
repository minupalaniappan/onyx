import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { PropsWithChildren } from 'react'
import { Row } from './layout'

type TagProps = {
  onClose?: () => void
} & PropsWithChildren

const Tag = (props: TagProps) => {
  return (
    <Row className="border bg-gray-100 border-black text-xs w-fit" y="center">
      {props.onClose && (
        <div
          className="cursor-pointer bg-white border-r border-black p-2 hover:bg-gray-200"
          onClick={props.onClose}
        >
          <XMarkIcon className="h-3 w-3" />
        </div>
      )}
      <Row grow className="py-1 px-4">
        {props.children}
      </Row>
    </Row>
  )
}

export default Tag
