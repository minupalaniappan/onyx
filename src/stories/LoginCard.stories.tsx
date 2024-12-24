import type { Meta } from '@storybook/react'

import LoginCard from '../components/loginCard'

const meta: Meta<typeof LoginCard> = {
  title: 'Components/LoginCard',
  render: (args) => <LoginCard {...args} />,
}

export default meta

export const Index = {
  args: {
    onLogin: () => {},
  },
}
