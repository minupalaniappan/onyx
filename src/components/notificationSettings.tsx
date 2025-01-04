import React, { useState } from 'react'
import { Card } from './ui/card'
import { Column } from './layout'

type NotificationType = 'team' | 'account'

type NotificationValue = {
  type: NotificationType
  value: boolean
}

type NotificationSettingsProps = {
  defaultValues: NotificationValue[]
  onChange: (values: NotificationValue[]) => void
}

const NotificationSettings = (props: NotificationSettingsProps) => {
  const [values, setValues] = useState<NotificationValue[]>(props.defaultValues)

  console.info(values, setValues)

  return (
    <Card>
      <Column></Column>
    </Card>
  )
}

export default NotificationSettings
