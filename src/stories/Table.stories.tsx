import { useState } from 'react'

import { DataTable } from '../components/ui/dataTable'
import { v4 as uuidv4 } from 'uuid'

import type { Meta } from '@storybook/react'

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
    size: undefined,
  },
  {
    header: 'Age',
    accessorKey: 'age',
    size: undefined,
  },
  {
    header: 'Email',
    accessorKey: 'email',
    size: undefined,
  },
]

const data = Array.from({ length: 100 }, (_, index) => ({
  name: `John Doe ${index}`,
  age: 28,
  email: `john.doe${index}@example.com`,
  id: uuidv4(),
}))

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table',
  render: function Component(args) {
    const [page, setPage] = useState(args.page ?? 1)

    return <DataTable {...args} page={page} onPageChange={setPage} />
  },
}

export default meta

export const Table = {
  args: {
    columns,
    data,
    onSearch: (e: string) => console.info(e),
    onPageChange: (e: number) => console.info(e),
    search: 'John',
    page: 1,
    isLoading: false,
    isDraggable: false,
    totalPages: 10,
    isSelectable: true,
  },
}
