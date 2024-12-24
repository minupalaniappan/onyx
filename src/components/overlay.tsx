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
      direction={props.direction}
      onClose={props.onClose}
      className="min-w-[500px]"
    >
      <Column wGrow grow>
        <Row className="w-full border-b border-black h-[55px]" grow>
          <Row y="center" grow hGrow className="!h-[px] w-full px-4">
            <OverlayHeader>{props.title}</OverlayHeader>
          </Row>
          {props.onClose ? (
            <Row
              y="center"
              x="center"
              className="border-l border-black h-full w-fit p-4 hover:bg-gray-100 cursor-pointer"
              onClick={props.onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </Row>
          ) : null}
        </Row>
      </Column>
    </Drawer>
  )
}

export default Overlay
