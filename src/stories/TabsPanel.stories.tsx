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
        title: 'Tab 1',
        value: 'tab1',
      },
      {
        title: 'Tab 2',
        value: 'tab2',
      },
    ],
  },
}
