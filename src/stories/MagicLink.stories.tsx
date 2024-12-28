import type { Meta } from '@storybook/react'

import MagicLinkCard from '../components/magicLinkCard'

const meta: Meta<typeof MagicLinkCard> = {
  title: 'Components/MagicLink',
  render: () => <MagicLinkCard />,
}

export default meta

export const MagicLink = {
  args: {},
}
