import type { Meta } from '@storybook/react'

import { FileUpload as FileUploadComponent } from '@/components/ui/fileUpload'

const meta: Meta<typeof FileUploadComponent> = {
  title: 'Components/FileUpload',
  render: (args) => <FileUploadComponent {...args} />,
}

export default meta

export const Button = {
  args: {
    children: '',
  },
}
