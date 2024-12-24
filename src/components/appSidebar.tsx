import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from './ui/sidebar'
import { Row } from './layout'

const AppSidebar = () => {
  return (
    <Sidebar>
      <Row grow className="w-full h-fit border-b" x="center" y="center" between>
        <SidebarHeader>
          <div>hi</div>
        </SidebarHeader>
        <SidebarTrigger />
      </Row>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
