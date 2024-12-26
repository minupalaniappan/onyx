import type { Meta } from '@storybook/react'

import Tag from '../components/tag'
import { Tooltip } from '../components/ui/tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  render: (args) => <Tag {...args} />,
}

export default meta

export const Index = {
  args: {
    children: 'Tag',
  },
}
