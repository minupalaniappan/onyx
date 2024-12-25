import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Column } from './layout'

type TabsPanelProps = {
  tabs: Array<{
    title: string
    value: string
    content: React.ReactNode
  }>
  selectedTab?: string
}

const TabsPanel = (props: TabsPanelProps) => {
  const [value, setValue] = useState(props.selectedTab || props.tabs[0].value)
  return (
    <Column wGrow grow className="h-full">
      <Tabs value={value} defaultValue={value} className="w-full">
        <TabsList className="flex flex-row grow">
          {props.tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setValue(tab.value)}
              className="flex items-start justify-start flex-row grow border-r border-r-black"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value={value}
          className="w-full border border-black h-full border-t-0"
        >
          <Column wGrow grow className="h-full p-3">
            {props.tabs.find((tab) => tab.value === value)?.content}
          </Column>
        </TabsContent>
      </Tabs>
    </Column>
  )
}

export default TabsPanel
