import React from 'react'
import AsyncSelect from 'react-select/async'

type SearchInputProps = {
  isLoading?: boolean
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <AsyncSelect
      classNames={{
        container: () => 'rounded-none',
        control: () => '!rounded-none !border-black focus:border-none',
        placeholder: () => '!text-gray-800 relative top-[1px]',
        input: () => '!text-black',
        option: () => '!text-black',
        singleValue: () => '!text-black',
      }}
      isLoading={props.isLoading}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  )
}

export default SearchInput
