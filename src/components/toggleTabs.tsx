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
      <TabsList className="grid w-full grid-cols-2">
        {props.tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => setValue(tab.value)}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default ToggleTabs
