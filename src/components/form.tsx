import React from 'react'
import { Form as FormComponent } from './ui/form'
import { z } from 'zod'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FormProps = {
  schema: z.AnyZodObject
  defaultValues: z.infer<z.AnyZodObject>
  onSubmit: (data: z.infer<z.AnyZodObject>) => void
  children: (props: { form: UseFormReturn }) => React.ReactNode
}

const Form = (props: FormProps) => {
  const form = useForm<z.infer<typeof props.schema>>({
    resolver: zodResolver(props.schema),
    defaultValues: props.defaultValues,
  })

  return (
    <FormComponent {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        {props.children({ form })}
      </form>
    </FormComponent>
  )
}

export default Form
