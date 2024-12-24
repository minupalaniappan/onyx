import { Meta } from '@storybook/react'
import Spinner from '../components/spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>

export default meta

export const Default = () => <Spinner />
