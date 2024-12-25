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
        <TabsList className="grid w-full grid-cols-2">
          {props.tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setValue(tab.value)}
              className="flex items-start justify-start"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value={value}
          className="w-full border border-black h-full"
        >
          <div>hi</div>
        </TabsContent>
      </Tabs>
    </Column>
  )
}

export default TabsPanel
