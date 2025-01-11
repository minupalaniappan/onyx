import type { Meta } from '@storybook/react'

import SearchInputComponent from '../components/searchInput'

const meta: Meta<typeof SearchInputComponent> = {
  title: 'Components/SearchInput',
  render: (args) => <SearchInputComponent {...args} />,
}

export default meta

export const ResetPassword = {
  args: {},
}
