import React from 'react'

import { Column } from './layout'
import { CardDescription, CardHeader } from './typography'
import { Card, CardContent } from './ui/card'
import Spinner from './spinner'
import { Mail } from 'lucide-react'

const MagicLinkCard = () => {
  return (
    <Card>
      <CardContent>
        <Column wGrow className="gap-4">
          <Column className="gap-2 w-full">
            <CardHeader>Acme</CardHeader>
            <CardDescription>Magic Link</CardDescription>
            <Column
              y="center"
              x="center"
              grow
              className="w-full gap-8 bg-gray-100 py-8"
            >
              <Column className="gap-2" y="center" x="center">
                <Mail className="w-8 h-8 stroke-slate-600" />
                <CardDescription>Waiting for confirmation</CardDescription>
              </Column>
              <Spinner size="md" />
            </Column>
          </Column>
        </Column>
      </CardContent>
    </Card>
  )
}

export default MagicLinkCard
