import type { Meta } from '@storybook/react'

import ForgotPasswordCard from '../components/forgotPasswordCard'

const meta: Meta<typeof ForgotPasswordCard> = {
  title: 'Components/ForgotPassword',
  render: (args) => <ForgotPasswordCard {...args} />,
}

export default meta

export const ForgotPassword = {
  args: {
    onForgotPassword: () => {},
  },
}
