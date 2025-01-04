import type { Meta } from '@storybook/react'

import OverlayComponent from '../components/overlay'
import { useState } from 'react'
import { Column } from '../components/layout'
import { Button } from '../components/ui/button'

const OverlayStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <Column wGrow grow>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <OverlayComponent
        open={open}
        onClose={() => setOpen(false)}
        direction="right"
        title="Overlay Title"
      ></OverlayComponent>
    </Column>
  )
}

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  render: () => <OverlayStory />,
}

export default meta

export const Overlay = {
  args: {
    direction: 'right',
    onSave: () => {},
    onClose: () => {},
  },
}
