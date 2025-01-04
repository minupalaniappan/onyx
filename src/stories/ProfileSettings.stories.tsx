import type { Meta } from '@storybook/react'

import ProfileSettingsCard from '../components/profileSettings'

const meta: Meta<typeof ProfileSettingsCard> = {
  title: 'Components/ProfileSettings',
  render: (args) => <ProfileSettingsCard {...args} />,
}

export default meta

export const ProfileSettings = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '1234 Main St, Anytown, USA',
      profileImage: 'https://github.com/shadcn.png',
      role: 'Admin',
    },
  },
}
