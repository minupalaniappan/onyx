import * as React from 'react'

import { cn } from '@/lib/utils'
import { Column } from '../layout'
import { InputLabel } from '../typography'

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { label?: string }
>(({ className, type, ...props }, ref) => {
  const component = (
    <input
      type={type}
      className={cn(
        'flex w-full border border-input bg-transparent px-3 !py-2 text-lg transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )

  return props.label ? (
    <Column wGrow className="gap-2">
      <InputLabel>{props.label}</InputLabel>
      {component}
    </Column>
  ) : (
    component
  )
})
Input.displayName = 'Input'

export { Input }
