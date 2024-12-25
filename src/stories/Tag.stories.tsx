import type { Meta } from '@storybook/react'

import Tag from '../components/tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  render: (args) => <Tag {...args} />,
}

export default meta

export const Index = {
  args: {
    children: 'Tag',
    onClose: () => {},
  },
}
