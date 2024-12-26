import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from './ui/sidebar'
import { Row } from './layout'
import { LifebuoyIcon } from '@heroicons/react/24/outline'

export type AppSidebarProps = {
  items: {
    title: string
    url: string
    icon: React.ReactNode
  }[]
}

const AppSidebar = (props: AppSidebarProps) => {
  const { open } = useSidebar()

  return (
    <Sidebar>
      <Row
        grow
        className="w-full !h-fit !max-h-fit"
        x="center"
        y="center"
        between
      >
        <SidebarHeader>
          <LifebuoyIcon className="h-5 w-5 stroke stroke-black" />
        </SidebarHeader>
        <SidebarTrigger />
      </Row>
      <SidebarContent>
        <SidebarMenu>
          {props.items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`px-[16px] !w-full ${!open ? 'flex items-center justify-center' : ''}`}
              >
                <a href={item.url} className="!w-full">
                  {item.icon}
                  {open ? <span>{item.title}</span> : null}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
