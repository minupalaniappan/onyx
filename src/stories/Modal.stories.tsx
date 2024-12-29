import type { Meta } from '@storybook/react'

import ModalComponent from '../components/ui/modal'
import { Button } from '../components/ui/button'

const meta: Meta<typeof ModalComponent> = {
  title: 'Components/Modal',
  render: (args) => <ModalComponent {...args} />,
}

export default meta

export const Modal = {
  args: {
    title: 'Modal Title',
    description: 'Modal Description',
    children: <div>Modal Content</div>,
    trigger: <Button>Open Modal</Button>,
    onClose: () => {},
    onSubmit: () => {},
    disabled: false,
  },
}
