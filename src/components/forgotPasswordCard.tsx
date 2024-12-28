import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column, Row } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'

type ForgotPasswordCardProps = {
  onForgotPassword: () => void
}

const ForgotPasswordCard = (props: ForgotPasswordCardProps) => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-4">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Forgot Password</CardDescription>
          </Column>
          <Column className="gap-4 py-2" wGrow>
            <Input placeholder="Email" label="Email" />
            <Button onClick={props.onForgotPassword}>
              Send Reset Password
            </Button>
          </Column>
          <Row>
            <ButtonLink href={'/signin'}>Sign in</ButtonLink>
          </Row>
        </Column>
      </CardContent>
    </Card>
  )
}

export default ForgotPasswordCard
