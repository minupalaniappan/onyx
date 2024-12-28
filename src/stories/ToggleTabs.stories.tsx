import type { Meta } from '@storybook/react'

import ToggleTabsComponent from '../components/toggleTabs'

const meta: Meta<typeof ToggleTabsComponent> = {
  title: 'Components/ToggleTabs',
  render: (args) => <ToggleTabsComponent {...args} />,
}

export default meta

export const ToggleTabs = {
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
