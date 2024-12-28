import type { Meta } from '@storybook/react'

import TabsPanelComponent from '../components/tabsPanel'

const meta: Meta<typeof TabsPanelComponent> = {
  title: 'Components/TabsPanel',
  render: (args) => <TabsPanelComponent {...args} />,
}

export default meta

export const TabsPanel = {
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
