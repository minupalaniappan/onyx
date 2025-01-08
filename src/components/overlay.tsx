import React, { PropsWithChildren } from 'react'
import Drawer from 'react-modern-drawer'
import { Column, Row } from './layout'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { OverlayHeader } from './typography'

type Props = {
  open: boolean
  direction: 'left' | 'right'
  onClose?: () => void
  title: string
} & PropsWithChildren

const Overlay = (props: Props) => {
  return (
    <Drawer
      open={props.open}
      direction={props.direction}
      onClose={props.onClose}
      className="min-w-[500px] h-full"
    >
      <Column wGrow grow className="h-full">
        <Row className="w-full border-b border-black h-[55px]" grow>
          <Row y="center" grow hGrow className="!h-[px] w-full px-4">
            <OverlayHeader>{props.title}</OverlayHeader>
          </Row>
          {props.onClose ? (
            <Row
              y="center"
              x="center"
              className="border-l border-black w-fit p-4 hover:bg-gray-100 cursor-pointer h-[54px]"
              onClick={props.onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </Row>
          ) : null}
        </Row>
        <Column wGrow className="w-full !h-full p-4">
          {props.children}
        </Column>
      </Column>
    </Drawer>
  )
}

export default Overlay
