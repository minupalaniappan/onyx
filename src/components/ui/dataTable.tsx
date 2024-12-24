'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Column, Row } from '../layout'
import TableSearch from '../tableSearch'
import Paginator from '../paginator'
import { Skeleton } from './skeleton'
import { useRef } from 'react'

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

  const height = ref.current?.clientHeight || 0

  const tableHeight = height - 80

  console.log(height, tableHeight)

  return (
    <Column wGrow>
      <Row grow className="w-full h-[40px]">
        <TableSearch onSearch={() => {}} />
        <Paginator page={1} totalPages={10} onPageChange={() => {}} />
      </Row>
      <div
        className="border border-black overflow-y-scroll w-full"
        style={{
          height: 'calc(100vh - 80px)',
          maxHeight: 'calc(100vh - 80px)',
        }}
        ref={ref}
      >
        {isLoading ? (
          <Column className="gap-2 p-2" wGrow grow>
            {Array.from({ length: tableHeight / 23 }).map((_, index) => (
              <Row key={index} grow className="h-[20px] w-full">
                <Skeleton className="!w-full !h-[20px] rounded-none" />
              </Row>
            ))}
          </Column>
        ) : (
          <Table className="h-full bg-gray-100 table-fixed">
            <TableHeader className="!sticky !top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="py-4 bg-white sticky top-0 "
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="py-2 !font-light text-md !sticky !top-0"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="cursor-pointer hover:bg-gray-200 table-fixed"
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
