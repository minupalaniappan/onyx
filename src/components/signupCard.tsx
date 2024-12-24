import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { CardDescription, CardHeader } from './typography'
import { Separator } from './ui/separator'

type SignupCardProps = {
  onSignup: () => void
}

const SignupCard = (props: SignupCardProps) => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-3">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Lets get started</CardDescription>
          </Column>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Button onClick={props.onSignup}>Sign up</Button>
          <Separator />
          <Button>Sign up via Google</Button>
        </Column>
      </CardContent>
    </Card>
  )
}

export default SignupCard
