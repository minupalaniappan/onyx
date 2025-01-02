import type { Meta } from '@storybook/react'

import DraggableEventListComponent from '../components/draggableEventList'

const Component = () => {
  return <DraggableEventListComponent />
}

const meta: Meta<typeof DraggableEventListComponent> = {
  title: 'Components/DraggableEventList',
  render: () => {
    return <Component />
  },
}

export default meta

export const DraggableEventList = {
  args: {},
}
