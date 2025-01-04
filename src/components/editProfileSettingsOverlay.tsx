import React from 'react'
import z from 'zod'

import Form from './form'
import { Column } from './layout'
import Overlay from './overlay'
import { Button } from './ui/button'
import { FormControl, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

export const UpdateUserSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
})

export type User = {
  name: string
  email: string
  phone: string
  address: string
  role: string
  profileImage: string
  joinedAt: Date
  connectedAccounts: ConnectedAccount[]
}

export type ConnectedAccount = {
  name: string
  connectedAt: Date
}

type EditProfileSettingsOverlayProps = {
  open: boolean
  onClose: () => void
  user: User
}

const EditProfileSettingsOverlay = (props: EditProfileSettingsOverlayProps) => {
  const onSubmit = (values: z.infer<typeof UpdateUserSchema>) => {
    console.log(values)
    props.onClose()
  }

  return (
    <Overlay
      open={props.open}
      direction="right"
      onClose={props.onClose}
      title="Edit Profile"
    >
      <Form
        schema={UpdateUserSchema}
        defaultValues={props.user}
        onSubmit={onSubmit}
      >
        {(form) => (
          <Column wGrow className="w-full h-full">
            <Column wGrow className="gap-4 h-full">
              <FormField
                control={form.form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        defaultValue={props.user.name}
                        label="Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="100 Main St, New York, NY 10001"
                        defaultValue={props.user.address}
                        label="Address"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Column>
            <Button type="submit" disabled={!form.form.formState.isValid}>
              Save
            </Button>
          </Column>
        )}
      </Form>
    </Overlay>
  )
}

export default EditProfileSettingsOverlay
