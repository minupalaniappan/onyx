import type { Meta } from '@storybook/react'

import TeamSettingsCard from '../components/teamSettings'

const meta: Meta<typeof TeamSettingsCard> = {
  title: 'Components/TeamSettings',
  render: (args) => <TeamSettingsCard {...args} />,
}

export default meta

export const TeamSettings = {
  args: {
    subject: 'Support Request',
    description: 'This is a support request',
  },
}
