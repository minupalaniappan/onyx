import type { Meta } from '@storybook/react'

import { Button as ButtonComponent } from '@/components/ui/button'

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  render: (args) => <ButtonComponent {...args} />,
}

export default meta

export const Button = {
  args: {
    children: 'Acme Button',
  },
}
