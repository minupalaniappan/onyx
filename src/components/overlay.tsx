import React, { PropsWithChildren } from 'react'
import Drawer from 'react-modern-drawer'

type Props = {
  open: boolean
  direction: 'left' | 'right'
  onClose: () => void
  onSave: () => void
} & PropsWithChildren

const Overlay = (props: Props) => {
  return (
    <Drawer
      open={props.open}
      direction={props.direction}
      onClose={props.onClose}
    >
      {props.children}
    </Drawer>
  )
}

export default Overlay
