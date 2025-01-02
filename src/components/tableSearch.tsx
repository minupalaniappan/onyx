import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from './ui/input'

type TableSearchProps = {
  onSearch: (search: string) => void
  search: string
}

const TableSearch = (props: TableSearchProps) => {
  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="absolute w-4 stroke-gray-800 stroke-2 h-4 top-1/2 -translate-y-1/2 left-2" />
      <Input
        placeholder="Search"
        defaultValue={props.search}
        onChange={(e) => props.onSearch(e.target.value)}
        className="focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none h-fit border border-black border-b-0 pl-7 font-light text-md !ring-0"
      />
    </div>
  )
}

export default TableSearch
