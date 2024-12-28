import { Meta } from '@storybook/react'
import SpinnerComponent from '../components/spinner'

const meta = {
  title: 'Components/Spinner',
  component: SpinnerComponent,
} satisfies Meta<typeof SpinnerComponent>

export default meta

export const Spinner = () => <SpinnerComponent />
