import type { Meta } from '@storybook/react'

import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  render: (args) => <Button {...args} />,
}

export default meta

export const Default = {
  args: {
    children: 'Click me',
  },
}
