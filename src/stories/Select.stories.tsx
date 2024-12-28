import type { Meta } from '@storybook/react'

import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const meta: Meta<typeof SelectComponent> = {
  title: 'Components/Select',
  render: () => (
    <SelectComponent>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="acme-a">Acme A</SelectItem>
        <SelectItem value="acme-b">Acme B</SelectItem>
        <SelectItem value="acme-c">Acme C</SelectItem>
      </SelectContent>
    </SelectComponent>
  ),
}

export default meta

export const Select = {
  args: {},
}
