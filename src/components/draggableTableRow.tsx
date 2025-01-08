import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Row as ReactTableRow } from '@tanstack/react-table'

import { flexRender } from '@tanstack/react-table'
import { CSSProperties } from 'react'
import { cn } from '../lib/utils'
import { TableCell } from './ui/table'

export const DraggableTableRow = <T,>({
  row,
  className,
  additionalStyle,
  onClick,
}: {
  row: ReactTableRow<T>
  className?: string
  additionalStyle?: CSSProperties
  onClick?: () => void
}) => {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.id,
  })

  console.info(isDragging)

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform), //let dnd-kit do its thing
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : 0,
    position: 'relative',
    borderBottom: isDragging ? 'none' : '1px solid black',
    ...additionalStyle,
  }

  return (
    // connect row ref to dnd-kit, apply important styles
    <div
      className={cn(
        'border-b transition-colors data-[state=selected] bg-gray-100 rounded-none border-black w-full flex flex-row',
        className,
      )}
      ref={setNodeRef}
      style={style}
      onClick={onClick}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          style={
            cell.column.columnDef.size
              ? {
                  width: cell.column.columnDef.size,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }
              : {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }
          }
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </div>
  )
}
