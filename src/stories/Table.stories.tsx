import type { Meta } from '@storybook/react'

import { DataTable } from '../components/ui/dataTable'

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

const data = [
  {
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
  },
]

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table',
  render: (args) => <DataTable {...args} />,
}

export default meta

export const Index = {
  args: {
    columns,
    data,
  },
}
