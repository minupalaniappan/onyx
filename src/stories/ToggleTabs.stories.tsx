import type { Meta } from '@storybook/react'

import ToggleTabs from '../components/toggleTabs'

const meta: Meta<typeof ToggleTabs> = {
  title: 'Components/ToggleTabs',
  render: (args) => <ToggleTabs {...args} />,
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
