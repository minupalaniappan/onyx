import type { Meta } from '@storybook/react'

import Tag from '../components/tag'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  render: () => (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <Tag>Trigger</Tag>
        </TooltipTrigger>
        <TooltipContent align="center" side="right">
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export default meta

export const Index = {
  args: {
    children: 'Tag',
  },
}
