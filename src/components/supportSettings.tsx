import React from 'react'
import { Card } from './ui/card'

export type SupportSettingsRequest = {
  subject: string
  description: string
}

type SupportSettingsProps = {
  onSubmit: (data: SupportSettingsProps) => void
}

const SupportSettings = (props: SupportSettingsProps) => {
  console.log(props)
  return <Card></Card>
}

export default SupportSettings
