import React from 'react'

export type TeamIndividual = {
  name: string
  email: string
  role: string
  profileImage: string
}

type TeamSettingsProps = {
  team: TeamIndividual[]
}

const TeamSettings = (props: TeamSettingsProps) => {
  console.log(props)
  return <div>TeamSettings</div>
}

export default TeamSettings
