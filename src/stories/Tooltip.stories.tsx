import type { Meta } from '@storybook/react'

import Tag from '../components/tag'
import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'

const meta: Meta<typeof TooltipComponent> = {
  title: 'Components/Tooltip',
  render: () => (
    <TooltipProvider>
      <TooltipComponent delayDuration={0}>
        <TooltipTrigger>
          <Tag>Trigger</Tag>
        </TooltipTrigger>
        <TooltipContent align="center" side="right">
          <p>Tooltip content</p>
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  ),
}

export default meta

export const Tooltip = {
  args: {
    children: 'Tag',
  },
}
