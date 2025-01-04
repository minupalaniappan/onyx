import { useSortable } from '@dnd-kit/sortable'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { cn } from '../../lib/utils'

export const DraggableHandle = ({
  rowId,
  className,
}: {
  rowId: string
  className?: string
}) => {
  const { attributes, listeners } = useSortable({
    id: rowId,
  })
  return (
    <Bars3Icon
      className={cn('w-4 h-4 stroke stroke-black', className)}
      {...attributes}
      {...listeners}
      style={{
        cursor: 'grab',
      }}
    />
  )
}
