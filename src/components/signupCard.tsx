import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'
import { Separator } from './ui/separator'
import { z } from 'zod'
import Form from './form'
import { FormControl } from './ui/form'
import { FormItem } from './ui/form'
import { FormField } from './ui/form'

type SignupCardProps = {
  onSignup: () => void
}

const SignupCard = (props: SignupCardProps) => {
  const formSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(1),
      confirmPassword: z.string().min(1),
    })
    .refine((schema) => schema.password === schema.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
    })

  return (
    <Form
      schema={formSchema}
      defaultValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={props.onSignup}
    >
      {(props_) => (
        <Card>
          <CardContent>
            <Column wGrow className="gap-4">
              <Column className="gap-2">
                <CardHeader>Acme</CardHeader>
                <CardDescription>Get started with Acme</CardDescription>
              </Column>
              <Column className="gap-4 py-2" wGrow>
                <FormField
                  control={props_.form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="Email" label="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={props_.form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Password"
                          label="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={props_.form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          label="Confirm Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  onClick={props.onSignup}
                  disabled={!props_.form.formState.isValid}
                >
                  Sign up
                </Button>
                <Separator />
                <Button value={'secondary'}>Sign up via Google</Button>
              </Column>
              <ButtonLink href={'/signin'}>Sign in</ButtonLink>
            </Column>
          </CardContent>
        </Card>
      )}
    </Form>
  )
}

export default SignupCard
