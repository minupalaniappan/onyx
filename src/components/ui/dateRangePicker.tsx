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
import { Row } from '../layout'
import { XMarkIcon } from '@heroicons/react/24/outline'

export type DatePickerWithRangeProps = {
  date?: {
    from?: Date
    to?: Date
  }
  setDate: (date?: { from?: Date; to?: Date }) => void
}

export const DatePickerWithRange = ({
  date,
  setDate,
}: DatePickerWithRangeProps) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Row y="center">
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'justify-start !w-[249px] text-left font-light text-sm !border-black',
                !date && 'text-muted-foreground',
              )}
            >
              <Row grow y="center" className="gap-2">
                <CalendarIcon className="!w-3 !h-3" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'LLL dd, y')} -{' '}
                      {format(date.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(date.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Pick a date</span>
                )}
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
          <div ref={ref}>
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={{
                from: date?.from,
                to: date?.to,
              }}
              onSelect={(e) => {
                if (e) {
                  setDate({ from: e.from ?? undefined, to: e.to ?? undefined })
                }
              }}
              numberOfMonths={2}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
