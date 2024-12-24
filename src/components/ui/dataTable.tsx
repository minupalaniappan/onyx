'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Column, Row } from '../layout'
import TableSearch from '../tableSearch'
import Paginator from '../paginator'
import { Skeleton } from './skeleton'
import { useEffect, useRef, useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const ref = useRef<HTMLDivElement>(null)

  const [tableHeight, setTableHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setTableHeight(ref.current.clientHeight)
    }
  }, [ref])

  console.info(tableHeight)

  return (
    <Column wGrow>
      <Row grow className="w-full h-[40px]">
        <TableSearch onSearch={() => {}} />
        <Paginator page={1} totalPages={10} onPageChange={() => {}} />
      </Row>
      <Row
        grow
        className="w-full h-[40px] border-l border-black px-2 border-t border-r items-center "
      >
        {table.getHeaderGroups().map((headerGroup) => (
          <Row key={headerGroup.id} className="bg-white w-full">
            {headerGroup.headers.map((header) => {
              return (
                <div key={header.id} className="text-xs w-full">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </div>
              )
            })}
          </Row>
        ))}
      </Row>
      <div
        className="border border-black overflow-y-scroll w-full"
        style={{
          height: 'calc(100vh - 110px)',
          maxHeight: 'calc(100vh - 110px)',
          overflow: isLoading ? 'hidden' : 'scroll',
        }}
        ref={ref}
      >
        {isLoading ? (
          <Column className="gap-2 p-2" wGrow grow>
            {Array.from({ length: tableHeight / 20 }).map((_, index) => (
              <Row key={index} grow className="h-[20px] w-full">
                <Skeleton className="!w-full !h-[20px] rounded-none" />
              </Row>
            ))}
          </Column>
        ) : (
          <Table className="h-full bg-gray-100 relative">
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="cursor-pointer px-2 hover:bg-gray-200 table-fixed"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-full text-center"
                  >
                    No results
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </Column>
  )
}
