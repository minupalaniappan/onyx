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
import { ChevronUpIcon, LifebuoyIcon } from '@heroicons/react/24/outline'
import { PanelLeft } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Image from 'next/image'

export type AppSidebarProps = {
  items: {
    title: string
    url: string
    icon: React.ReactNode
  }[]
  user: {
    name: string
    profilePicture: string
  }
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
      <SidebarFooter>
        <SidebarFooter>
          <SidebarMenu className="hover:bg-gray-100">
            <SidebarMenuItem className="px-2 py-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="whitespace-nowrap">
                    <Image
                      src={props.user.profilePicture}
                      className="w-4 h-4"
                      alt="Profile Picture"
                      width={16}
                      height={16}
                    />
                    {props.user.name}
                    <ChevronUpIcon className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side={!open ? 'right' : 'top'}
                  className={`w-[--radix-popper-anchor-width] ${!open ? 'relative bottom-2' : ''}`}
                  sideOffset={!open ? 20 : 10}
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
