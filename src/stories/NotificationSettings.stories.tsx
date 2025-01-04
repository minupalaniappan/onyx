import type { Meta } from '@storybook/react'

import NotificationSettingsCard from '../components/notificationSettings'

const meta: Meta<typeof NotificationSettingsCard> = {
  title: 'Components/NotificationSettings',
  render: (args) => <NotificationSettingsCard {...args} />,
}

export default meta

export const NotificationSettings = {
  args: {
    defaultValues: [
      {
        type: 'team',
        value: true,
      },
      {
        type: 'account',
        value: false,
      },
    ],
  },
}
