import type { Meta } from '@storybook/react'

import SignupCard from '../components/signupCard'

const meta: Meta<typeof SignupCard> = {
  title: 'Components/SignupCard',
  render: (args) => <SignupCard {...args} />,
}

export default meta

export const Index = {
  args: {
    onSignup: () => {},
  },
}
