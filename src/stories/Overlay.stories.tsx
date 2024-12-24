import type { Meta } from '@storybook/react'

import Overlay from '../components/overlay'

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  render: (args) => <Overlay {...args} />,
}

export default meta

export const Index = {
  args: {
    onLogin: () => {},
  },
}
