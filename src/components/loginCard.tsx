import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'
import { Separator } from './ui/separator'

type LoginCardProps = {
  onLogin: () => void
}

const LoginCard = (props: LoginCardProps) => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-3">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Welcome back to Acme</CardDescription>
          </Column>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button onClick={props.onLogin}>Sign</Button>
          <Separator />
          <Button>Sign in via Google</Button>
          <ButtonLink href={'/forgot-password'}>Forgot Password</ButtonLink>
        </Column>
      </CardContent>
    </Card>
  )
}

export default LoginCard
