import React from 'react'
import { Card, CardContent } from './ui/card'
import { Column, Row } from './layout'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ButtonLink, CardDescription, CardHeader } from './typography'

type ResetPasswordCardProps = {
  onResetPassword: () => void
}

const ResetPasswordCard = (props: ResetPasswordCardProps) => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-4">
          <Column className="gap-2">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Reset Password</CardDescription>
          </Column>
          <Column className="gap-4 py-2" wGrow>
            <Input placeholder="Email" label="Email" disabled />
            <Input placeholder="Password" label="Password" />
            <Input placeholder="Confirm Password" label="Confirm Password" />
            <Button onClick={props.onResetPassword}>Reset Password</Button>
          </Column>
          <Row>
            <ButtonLink href={'/signin'}>Sign in</ButtonLink>
          </Row>
        </Column>
      </CardContent>
    </Card>
  )
}

export default ResetPasswordCard
