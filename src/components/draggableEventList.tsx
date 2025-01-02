import React from 'react'
import { DndContext } from '@dnd-kit/core'

import EventListDropzone from './eventListDropzone'

const DraggableEventList = () => {
  return (
    <DndContext>
      <EventListDropzone></EventListDropzone>
    </DndContext>
  )
}

export default DraggableEventList
