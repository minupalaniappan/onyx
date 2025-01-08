import type { Meta } from '@storybook/react'

import { Checkbox as CheckboxComponent } from '../components/ui/checkbox'

const Component = () => {
  return <CheckboxComponent />
}

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Components/Checkbox',
  render: () => {
    return <Component />
  },
}

export default meta

export const Checkbox = {
  args: {},
}
