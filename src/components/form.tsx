import React from 'react'
import { Form as FormComponent } from './ui/form'
import { z } from 'zod'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FormProps<T extends z.ZodType> = {
  schema: T
  defaultValues: z.infer<T>
  onSubmit: (data: z.infer<T>) => void
  children: (props: { form: UseFormReturn }) => React.ReactNode
}

const Form = <T extends z.ZodType>(props: FormProps<T>) => {
  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
    defaultValues: props.defaultValues,
  })

  return (
    <FormComponent {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className="w-full h-full"
      >
        {props.children({ form })}
      </form>
    </FormComponent>
  )
}

export default Form
