import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'
import { Separator } from './ui/separator'

type SignupCardProps = {
  onSignup: () => void
}

const SignupCard = (props: SignupCardProps) => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-4">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Get started with Acme</CardDescription>
          </Column>
          <Column className="gap-4 py-2" wGrow>
            <Input placeholder="Email" label="Email" />
            <Input placeholder="Password" label="Password" />
            <Input placeholder="Confirm Password" label="Confirm Password" />
            <Button onClick={props.onSignup}>Sign up</Button>
            <Separator />
            <Button value={'secondary'}>Sign up via Google</Button>
          </Column>
          <ButtonLink href={'/signin'}>Sign in</ButtonLink>
        </Column>
      </CardContent>
    </Card>
  )
}

export default SignupCard
