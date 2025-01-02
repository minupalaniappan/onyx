import { useSortable } from '@dnd-kit/sortable'
import { Bars3Icon } from '@heroicons/react/24/outline'

export const DraggableHandle = ({ rowId }: { rowId: string }) => {
  const { attributes, listeners } = useSortable({
    id: rowId,
  })
  return (
    <div {...attributes} {...listeners}>
      <Bars3Icon className="w-4 h-4 stroke stroke-black" />
    </div>
  )
}
