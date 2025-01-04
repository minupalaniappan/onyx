import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column, Row } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'
import { Separator } from './ui/separator'
import { z } from 'zod'
import Form from './form'
import { FormControl, FormField, FormItem } from './ui/form'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

type LoginCardProps = {
  onLogin: (e: z.infer<typeof signInSchema>) => void
}

const LoginCard = (props: LoginCardProps) => {
  return (
    <Form
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={props.onLogin}
    >
      {(props) => (
        <Card>
          <CardContent>
            <Column wGrow className="gap-4">
              <Column className="gap-2">
                <CardHeader>Acme</CardHeader>
                <CardDescription>Welcome back to Acme</CardDescription>
              </Column>
              <Column className="gap-4 py-2" wGrow>
                <FormField
                  control={props.form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="joe@appleseed.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={props.form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Password"
                          label="Password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={!props.form.formState.isValid}>
                  Sign
                </Button>
                <Separator />
                <Button value={'secondary'}>Sign in via Google</Button>
              </Column>
              <Row>
                <ButtonLink href={'/signup'}>Forgot Password</ButtonLink>
              </Row>
            </Column>
          </CardContent>
        </Card>
      )}
    </Form>
  )
}

export default LoginCard
