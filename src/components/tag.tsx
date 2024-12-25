import React, { PropsWithChildren } from 'react'

type TagProps = {} & PropsWithChildren

const Tag = (props: TagProps) => {
  return (
    <div className="border bg-gray-100 border-black text-xs">
      {props.children}
    </div>
  )
}

export default Tag
