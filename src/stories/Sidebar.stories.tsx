import type { Meta } from '@storybook/react'

import { SidebarProvider } from '../components/ui/sidebar'
import AppSidebar from '../components/appSidebar'
import { HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

const meta: Meta<typeof AppSidebar> = {
  title: 'Components/Sidebar',
  render: (args) => (
    <SidebarProvider>
      <AppSidebar items={args.items} user={args.user} />
    </SidebarProvider>
  ),
}

export default meta

export const Sidebar = {
  args: {
    items: [
      {
        title: 'Dashboard',
        url: '/',
        icon: <HomeIcon className="h-4 stroke-2 w-4 stroke stroke-black" />,
      },
      {
        title: 'Users',
        url: '/users',
        icon: <UsersIcon className="h-4 stroke-2 w-4 stroke stroke-black" />,
      },
    ],
    user: {
      name: 'John Doe',
      profilePicture: 'https://github.com/shadcn.png',
    },
  },
}
