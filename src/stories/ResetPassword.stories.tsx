import type { Meta } from '@storybook/react'

import ResetPasswordCard from '../components/resetPasswordCard'

const meta: Meta<typeof ResetPasswordCard> = {
  title: 'Components/ResetPassword',
  render: (args) => <ResetPasswordCard {...args} />,
}

export default meta

export const ResetPassword = {
  args: {},
}
