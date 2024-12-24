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
              <SidebarMenuButton asChild className="px-[10px]">
                <a href={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
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
