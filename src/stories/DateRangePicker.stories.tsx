import type { Meta } from '@storybook/react'

import { DatePickerWithRange as DatePickerComponent } from '@/components/ui/dateRangePicker'
import { useState } from 'react'

const Component = () => {
  const [date, setDate] = useState<
    | {
        from?: Date
        to?: Date
      }
    | undefined
  >({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 20),
  })

  return (
    <DatePickerComponent
      date={
        date ?? {
          to: new Date(),
          from: new Date(),
        }
      }
      setDate={(e) => setDate(e)}
    />
  )
}

const meta: Meta<typeof DatePickerComponent> = {
  title: 'Components/DateRangePicker',
  render: () => {
    return <Component />
  },
}

export default meta

export const DateRangePicker = {
  args: {},
}
