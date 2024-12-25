import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

type ToggleTabsProps = {
  tabs: Array<{
    title: string
    value: string
  }>
  selectedTab?: string
}

const ToggleTabs = (props: ToggleTabsProps) => {
  const [value, setValue] = useState(props.selectedTab || props.tabs[0].value)

  return (
    <Tabs value={value} defaultValue={value}>
      <TabsList className="flex items-start justify-start flex-row grow border-r border-r-black">
        {props.tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => setValue(tab.value)}
            className="flex items-center justify-center flex-row grow [&:not(:last-child)]:border-r  border-r-black"
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default ToggleTabs
