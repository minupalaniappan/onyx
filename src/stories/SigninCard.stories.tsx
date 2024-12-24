import type { Meta } from '@storybook/react'

import SigninCard from '../components/signinCard'

const meta: Meta<typeof SigninCard> = {
  title: 'Components/SigninCard',
  render: (args) => <SigninCard {...args} />,
}

export default meta

export const Index = {
  args: {
    onLogin: () => {},
  },
}
