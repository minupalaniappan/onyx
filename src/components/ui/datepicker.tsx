'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Row } from '../layout'

export type DatePickerProps = {
  date: Date | undefined
  setDate: (date?: Date) => void
}

export const DatePicker = (props: DatePickerProps) => {
  const { date, setDate } = props
  const [open, setOpen] = React.useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Row grow y="center">
          <Button
            variant={'outline'}
            className={cn(
              'w-[249px] justify-start text-left font-light text-sm border border-black',
              !date && 'text-muted-foreground',
            )}
          >
            <Row y="center" between grow className="relative">
              <Row y="center" className="gap-2">
                <CalendarIcon className="!w-[12px] !h-[12px]" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Row>
            </Row>
          </Button>
          {date ? (
            <XMarkIcon
              className=" !w-[12px] !h-[12px] stroke-2 hover:bg-gray-300 relative right-[25px] cursor-pointer"
              {...{
                onClick: () => {
                  setDate(undefined)
                },
              }}
            />
          ) : (
            ''
          )}
        </Row>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            setOpen(false)
            setDate(e)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
