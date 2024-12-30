import type { Meta } from '@storybook/react'

import { FileUpload as FileUploadComponent } from '@/components/ui/fileUpload'
import { useState } from 'react'

const FileUploadComponentLocal = () => {
  const [files, setFiles] = useState<File[]>([])
  const onDrop = (files: File[]) => {
    setFiles(files)
  }
  return (
    <FileUploadComponent files={files} onDrop={onDrop} setFiles={setFiles} />
  )
}

const meta: Meta<typeof FileUploadComponent> = {
  title: 'Components/FileUpload',
  render: () => <FileUploadComponentLocal />,
}

export default meta

export const FileUpload = {
  args: {
    children: '',
  },
}
