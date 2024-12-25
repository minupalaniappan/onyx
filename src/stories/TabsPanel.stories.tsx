import type { Meta } from '@storybook/react'

import TabsPanel from '../components/tabsPanel'

const meta: Meta<typeof TabsPanel> = {
  title: 'Components/TabsPanel',
  render: (args) => <TabsPanel {...args} />,
}

export default meta

export const Index = {
  args: {
    tabs: [
      {
        title: 'Account',
        value: 'account',
        content: <div>Account</div>,
      },
      {
        title: 'Billing',
        value: 'billing',
        content: <div>Billing</div>,
      },
      {
        title: 'Security',
        value: 'security',
        content: <div>Security</div>,
      },
    ],
  },
}
