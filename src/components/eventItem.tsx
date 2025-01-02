import React from 'react'
import { Column, Row } from './layout'
import { useDraggable } from '@dnd-kit/core'

type EventItemProps = {
  startTime: string
  endTime: string
  title: string
  description: string
  id: string
}

const EventItem = (props: EventItemProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: 'unique-id',
  })
  return (
    <div className="w-full" ref={setNodeRef}>
      <div {...attributes} {...listeners}>
        Drag me
      </div>
      <Column wGrow className="border border-black bg-gray-100 p-2">
        <Row>{props.title}</Row>
        <Row>{props.description}</Row>
        <Row>{props.startTime}</Row>
        <Row>{props.endTime}</Row>
      </Column>
    </div>
  )
}

export default EventItem
