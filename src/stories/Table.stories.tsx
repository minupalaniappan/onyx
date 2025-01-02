import type { Meta } from '@storybook/react'

import { DataTable } from '../components/ui/dataTable'
import { useState } from 'react'

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
]

const data = Array.from({ length: 100 }, (_, index) => ({
  name: `John Doe ${index}`,
  age: 28,
  email: `john.doe${index}@example.com`,
}))

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table',
  render: function Component(args) {
    const [page, setPage] = useState(1)

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
    totalPages: 10,
  },
}
