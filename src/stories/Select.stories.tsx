import type { Meta } from '@storybook/react'

import Overlay from '../components/overlay'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const meta: Meta<typeof Overlay> = {
  title: 'Components/Select',
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="acme-a">Acme A</SelectItem>
        <SelectItem value="acme-b">Acme B</SelectItem>
        <SelectItem value="acme-c">Acme C</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export default meta

export const Index = {
  args: {},
}
