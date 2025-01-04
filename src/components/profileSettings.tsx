import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Column, Row } from './layout'
import Attribute from './Attribute'
import Avatar from './Avatar'
import { Button } from './ui/button'
import EditProfileSettingsModal, { User } from './editProfileSettingsOverlay'

type ProfileSettingsProps = {
  user: User
}

const ProfileSettings = (props: ProfileSettingsProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <CardContent className="w-full">
        <Column wGrow className="gap-4">
          <Row grow className="gap-2 w-full" y="center">
            <Avatar
              src={props.user.profileImage}
              alt={props.user.name}
              width={20}
              height={20}
            />
            <Attribute
              label="Name"
              size="lg"
              value={props.user.name}
              className="relative top-[1px]"
            />
          </Row>
          <Column className="gap-4 py-4 h-full" wGrow grow>
            <Row grow className="w-full" between>
              <Row grow x="left" className="w-full">
                <Attribute label="Email" value={props.user.email} />
              </Row>
              <Row grow x="left" className="w-full">
                <Attribute label="Phone" value={props.user.phone} />
              </Row>
            </Row>
            <Row grow className="w-full" between>
              <Row grow x="left" className="w-full">
                <Attribute label="Address" value={props.user.address} />
              </Row>
              <Row grow x="left" className="w-full">
                <Attribute label="Role" value={props.user.role} />
              </Row>
            </Row>
          </Column>
          <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        </Column>
      </CardContent>
      <EditProfileSettingsModal
        open={open}
        onClose={() => setOpen(false)}
        user={props.user}
      />
    </Card>
  )
}

export default ProfileSettings
