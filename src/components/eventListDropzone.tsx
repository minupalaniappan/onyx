import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '../lib/utils'

export type EventListDropzone = {
  children?: React.ReactNode
  className?: string
}

const EventListDropzone = (props: EventListDropzone) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        props.className,
        'border border-black bg-gray-100 p-2',
        isOver && 'bg-green-500',
      )}
    >
      {props.children}
    </div>
  )
}

export default EventListDropzone
