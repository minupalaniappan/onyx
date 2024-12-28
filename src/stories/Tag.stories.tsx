import type { Meta } from '@storybook/react'

import TagComponent from '../components/tag'

const meta: Meta<typeof TagComponent> = {
  title: 'Components/Tag',
  render: (args) => <TagComponent {...args} />,
}

export default meta

export const Tag = {
  args: {
    children: 'Tag',
    onClose: () => {},
  },
}
