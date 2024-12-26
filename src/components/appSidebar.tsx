import React, { useState } from 'react'
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
import { PanelLeft } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export type AppSidebarProps = {
  items: {
    title: string
    url: string
    icon: React.ReactNode
  }[]
}

const AppSidebar = (props: AppSidebarProps) => {
  const { open, setOpen } = useSidebar()
  const [headerHover, setHeaderHover] = useState(false)

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
          {headerHover && !open ? (
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <PanelLeft
                    className="!w-5 !h-5 cursor-pointer"
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => !open && setHeaderHover(true)}
                    onMouseLeave={() => !open && setHeaderHover(false)}
                  />
                </TooltipTrigger>
                <TooltipContent align="center" side="right">
                  <p>Expand Sidebar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <LifebuoyIcon
              className={`stroke stroke-black w-5 h-5`}
              onMouseEnter={() => !open && setHeaderHover(true)}
              onMouseLeave={() => !open && setHeaderHover(false)}
            />
          )}
        </SidebarHeader>
        <SidebarTrigger />
      </Row>
      <SidebarContent>
        <SidebarMenu>
          {props.items.map((item) => {
            const node = (
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
            )

            return open ? (
              node
            ) : (
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>{node}</TooltipTrigger>
                  <TooltipContent align="center" side="right">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
