import type { Meta } from '@storybook/react'

import { DatePicker as DatePickerComponent } from '@/components/ui/datepicker'
import { useState } from 'react'

const Component = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return <DatePickerComponent date={date} setDate={setDate} />
}

const meta: Meta<typeof DatePickerComponent> = {
  title: 'Components/DatePicker',
  render: () => {
    return <Component />
  },
}

export default meta

export const DatePicker = {
  args: {},
}
