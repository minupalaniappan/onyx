'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row as ReactTableRow,
  useReactTable,
} from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Column, Row } from '../layout'
import TableSearch from '../tableSearch'
import Paginator from '../paginator'
import { Skeleton } from './skeleton'
import { useEffect, useMemo, useRef, useState } from 'react'
import { DraggableTableRow } from '../draggableTableRow'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { DraggableHandle } from './draggableHandle'
import { Checkbox } from './checkbox'
import { cn } from '../../lib/utils'

interface DataTableProps<TData extends { id: string }, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading?: boolean
  isDraggable?: boolean
  onSearch?: (search: string) => void
  onPageChange?: (page: number) => void
  page?: number
  totalPages?: number
  search?: string
  onRowClick?: (rows: TData) => void
  onDelete?: (rows: TData[]) => void
  isSelectable?: boolean
  onSelectedRowsChange?: (rows: TData[]) => void
}

export function DataTable<TData extends { id: string }, TValue>({
  columns,
  data: tableData,
  isLoading,
  isDraggable,
  onSearch,
  onPageChange,
  page,
  search,
  isSelectable,
  onRowClick,
  totalPages,
  onSelectedRowsChange,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState(tableData)
  const [selectedRows, setSelectedRows] = useState<TData[]>([])

  useEffect(() => {
    onSelectedRowsChange?.(selectedRows)
  }, [onSelectedRowsChange, selectedRows])

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  )

  const dataIds = useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id),
    [data],
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex) //this is just a splice util
      })
    }
  }

  const tableColumns = useMemo(() => {
    let newColumns = columns

    if (isDraggable) {
      newColumns = [
        {
          id: 'drag-handle',
          header: 'Move',
          cell: ({ row }: { row: ReactTableRow<TData> }) => (
            <DraggableHandle
              rowId={row.id}
              className="relative top-[1px] left-[5px]"
            />
          ),
          size: 200,
        },
        ...columns,
      ]
    }

    if (isSelectable) {
      newColumns = [
        {
          id: 'select',
          header: '',
          cell: ({ row }: { row: ReactTableRow<TData> }) => (
            <Checkbox
              checked={selectedRows.includes(row.original)}
              onClick={(e) => {
                e.stopPropagation()
                if (selectedRows.includes(row.original)) {
                  setSelectedRows(
                    selectedRows.filter((r) => r !== row.original),
                  )
                } else {
                  setSelectedRows([...selectedRows, row.original])
                }
              }}
            />
          ),
        },
        ...newColumns,
      ]
    }

    return newColumns
  }, [columns, isDraggable, isSelectable, selectedRows])

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    debugAll: true,
    getRowId: (row) => row.id,
  })

  const ref = useRef<HTMLDivElement>(null)

  const [tableHeight, setTableHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setTableHeight(ref.current.clientHeight)
    }
  }, [ref])

  const tNode = isDraggable ? (
    <Table className="h-full bg-gray-100 relative">
      <TableBody>
        <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <DraggableTableRow
                key={row.id}
                row={row}
                data-state={row.getIsSelected() && 'selected'}
                className={cn(
                  'cursor-pointer px-2 hover:bg-gray-200 table-fixed h-[36px]',
                  {
                    '!border-b-0':
                      index === table.getRowModel().rows.length - 1,
                  },
                )}
                onClick={() => onRowClick?.(row.original)}
              />
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
        </SortableContext>
      </TableBody>
    </Table>
  ) : (
    <Table className="h-full bg-gray-100 relative">
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row, index) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className={cn(
                'cursor-pointer px-2 hover:bg-gray-200 table-fixed',
                {
                  'border-b-0': index === table.getRowModel().rows.length - 1,
                },
              )}
              onClick={() => {
                onRowClick?.(row.original)
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={
                    cell.column.columnDef.size
                      ? {
                          width: cell.column.columnDef.size,
                        }
                      : {}
                  }
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-full text-center">
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Column wGrow>
        <Row grow className="w-full h-[40px]">
          {onSearch ? (
            <TableSearch onSearch={onSearch} search={search ?? ''} />
          ) : (
            ''
          )}
          {onPageChange && !isDraggable ? (
            <Paginator
              page={page ?? 1}
              totalPages={totalPages ?? 10}
              onPageChange={onPageChange}
            />
          ) : (
            ''
          )}
        </Row>
        <Row
          grow
          className="w-full h-[40px] border-l border-black px-2 border-t border-r items-center "
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <Row key={headerGroup.id} className="bg-white w-full">
              {headerGroup.headers.map((header) => {
                return (
                  <div
                    key={header.id}
                    className="text-xs w-full"
                    style={
                      header.column.columnDef.size
                        ? {
                            width: header.column.columnDef.size,
                          }
                        : {
                            width: '100% !important',
                          }
                    }
                  >
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
          className="border border-black overflow-y-scroll no-scrollbar w-full"
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
            tNode
          )}
        </div>
      </Column>
    </DndContext>
  )
}
