import type { Meta } from '@storybook/react'

import SearchInputComponent from '../components/searchInput'

const meta: Meta<typeof SearchInputComponent> = {
  title: 'Components/SearchInput',
  render: (args) => <SearchInputComponent {...args} />,
}

export default meta

export const SearchInput = {
  args: {
    onSearch: async (value: string) =>
      fetch(`https://api.github.com/search/users?q=${value}`)
        .then((e) => e.json())
        .then(({ items }) =>
          items.map((e: { login: string }) => ({
            name: e.login,
          })),
        ),
    formatLabel: (value: { name: string }) => value.name,
  },
}
