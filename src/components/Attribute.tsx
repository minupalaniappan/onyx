import React from 'react'
import { Column } from './layout'
import { AttributeLabel, AttributeValue } from './typography'
import { cn } from '../lib/utils'

type AttributeProps = {
  label: string
  value: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Attribute = (props: AttributeProps) => {
  return (
    <Column
      className={cn('gap-1', props.className, props.size === 'lg' && 'gap-1')}
    >
      <AttributeLabel size={props.size}>{props.label}</AttributeLabel>
      <AttributeValue size={props.size}>{props.value}</AttributeValue>
    </Column>
  )
}

export default Attribute
