import React, { useCallback, useEffect, useState } from 'react'
import Spinner from './spinner'
import { Row } from './layout'
import { debounce } from 'lodash'
import Select from 'react-select'
type SearchInputProps<T> = {
  onSearch: (value: string) => Promise<Array<T>>
  formatLabel: (value: T) => string
}

const SearchInput = <T,>(props: SearchInputProps<T>) => {
  const [value, setValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<T[]>([])
  const [searching, setSearching] = useState<boolean>(false)

  const lazyOnSearch = useCallback(
    debounce(async (value) => {
      setLoading(true)
      if (value.length > 0) {
        const options = await props.onSearch(value)
        setOptions(options)
      } else {
        setOptions([])
      }
      setSearching(false)
      setLoading(false)
    }, 500),
    [],
  )

  useEffect(() => {
    lazyOnSearch(value)
  }, [value, lazyOnSearch])

  return (
    <Select
      classNames={{
        container: () => 'rounded-none',
        control: () =>
          '!rounded-none !border-black focus:border-none !focus:shadow-none !shadow-none',
        placeholder: () => '!text-gray-800 relative top-[1px]',
        input: () => '!text-black',
        option: () => '!text-black',
        singleValue: () => '!text-black',
        menu: () => '!rounded-none !border !border-black !shadow-none',
        noOptionsMessage: () => '!text-black',
        dropdownIndicator: () => '!hidden',
      }}
      inputValue={value}
      onInputChange={(newValue) => {
        setSearching(true)
        setValue(newValue ?? '')
      }}
      isLoading={loading}
      options={options.map((e) => ({
        label: props.formatLabel(e),
        value: e,
      }))}
      onMenuClose={() => setOptions([])}
      components={{
        IndicatorSeparator: () => null,
        LoadingIndicator: () => null,
        DownChevron: () => null,
        LoadingMessage: () => (
          <Row y="center" x="center" grow className="py-2">
            <Spinner />
          </Row>
        ),
        NoOptionsMessage: () =>
          value.length === 0 || searching ? (
            <Row y="center" x="center" grow className="py-2">
              Start searching
            </Row>
          ) : (
            <Row y="center" x="center" grow className="py-2">
              No results
            </Row>
          ),
      }}
    />
  )
}

export default SearchInput
