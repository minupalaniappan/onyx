import { useState } from 'react'

import { DataTable } from '../components/ui/dataTable'
import { v4 as uuidv4 } from 'uuid'

import type { Meta } from '@storybook/react'
import EditTeamMemberSettingsOverlay from '../components/editTeamMemberSettings'

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
    size: undefined,
  },
  {
    header: 'Email',
    accessorKey: 'email',
    size: undefined,
  },
  {
    header: 'Role',
    accessorKey: 'role',
    size: undefined,
  },
]

const data = Array.from({ length: 100 }, (_, index) => ({
  name: `John Doe ${index}`,
  email: `john.doe${index}@example.com`,
  role: 'Admin',
  id: uuidv4(),
  phone: '1234567890',
  address: '1234567890',
  profileImage: 'https://via.placeholder.com/150',
  joinedAt: new Date(),
  connectedAccounts: [],
}))

const meta: Meta<typeof DataTable> = {
  title: 'Components/TeamSettings',
  render: function Component(args) {
    const [page, setPage] = useState(args.page ?? 1)
    const [open, setOpen] = useState(false)
    const [userId, setUserId] = useState<string | null>(null)
    const onRowSelect = (e: { id: string }) => {
      setOpen(true)
      setUserId(e.id)
    }

    return (
      <>
        <DataTable
          {...args}
          page={page}
          onPageChange={setPage}
          onRowClick={onRowSelect}
        />
        <EditTeamMemberSettingsOverlay
          open={open}
          onClose={() => {
            setOpen(false)
            setUserId(null)
          }}
          user={data.find((user) => user.id === userId)}
        />
      </>
    )
  },
}

export default meta

export const TeamSettings = {
  args: {
    columns,
    data,
    onSearch: (e: string) => console.info(e),
    onPageChange: (e: number) => console.info(e),
    onRowSelect: (e: unknown) => console.info(e),
    search: 'John',
    page: 1,
    isLoading: false,
    isDraggable: false,
    totalPages: 10,
  },
}
