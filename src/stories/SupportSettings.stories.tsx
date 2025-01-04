import type { Meta } from '@storybook/react'

import SupportSettingsCard from '../components/supportSettings'

const meta: Meta<typeof SupportSettingsCard> = {
  title: 'Components/SupportSettings',
  render: (args) => <SupportSettingsCard {...args} />,
}

export default meta

export const SupportSettings = {
  args: {
    subject: 'Support Request',
    description: 'This is a support request',
  },
}
