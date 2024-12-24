import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column, Row } from './layout'
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
        <Column wGrow className="gap-4">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Welcome back to Acme</CardDescription>
          </Column>
          <Column className="gap-2" wGrow>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button onClick={props.onLogin}>Sign</Button>
            <Separator />
            <Button value={'secondary'}>Sign in via Google</Button>
          </Column>
          <Row className="gap-2">
            <ButtonLink href={'/signup'}>Forgot Password</ButtonLink>
          </Row>
        </Column>
      </CardContent>
    </Card>
  )
}

export default LoginCard
