import type { Meta } from '@storybook/react'

import { Sidebar, SidebarProvider } from '../components/ui/sidebar'
import AppSidebar from '../components/appSidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  render: () => (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  ),
}

export default meta

export const Index = {
  args: {},
}
