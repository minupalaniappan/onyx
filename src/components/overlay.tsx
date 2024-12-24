import React, { PropsWithChildren } from 'react'
import Drawer from 'react-modern-drawer'
import { Column, Row } from './layout'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { OverlayHeader } from './typography'

type Props = {
  open: boolean
  direction: 'left' | 'right'
  onClose?: () => void
  onSave: () => void
  title: string
} & PropsWithChildren

const Overlay = (props: Props) => {
  return (
    <Drawer
      open={props.open}
      size={500}
      direction={props.direction}
      onClose={props.onClose}
      className="min-w-[400px]"
    >
      <Column wGrow grow>
        <Row className="w-full border-b border-black" grow>
          {props.onClose ? (
            <Row
              y="center"
              x="center"
              className="border-r border-black p-4 hover:bg-gray-100 cursor-pointer"
              onClick={props.onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </Row>
          ) : null}
          <OverlayHeader>{props.title}</OverlayHeader>
        </Row>
      </Column>
    </Drawer>
  )
}

export default Overlay
