import type { Meta } from '@storybook/react'

import SignupCard from '../components/signupCard'

const meta: Meta<typeof SignupCard> = {
  title: 'Components/Signup',
  render: (args) => <SignupCard {...args} />,
}

export default meta

export const Signup = {
  args: {
    onSignup: () => {},
  },
}
