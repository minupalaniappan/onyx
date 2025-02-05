import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Column, Row } from '../layout'
import {
  DocumentIcon,
  DocumentPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { cn } from '../../lib/utils'
import { InputLabel } from '../typography'
import Spinner from '../spinner'
type FileUploadProps = {
  onDrop: (files: File[]) => Promise<void>
  files: File[]
  setFiles: (files: File[]) => void
}

export const FileUpload = (props: FileUploadProps) => {
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setLoading(true)
      await props.onDrop(acceptedFiles)
      setLoading(false)
      // Do something with the files
    },
    [props],
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Column wGrow className="gap-2 w-full">
      <div
        {...getRootProps()}
        className={cn(
          'w-full border border-gray-600 bg-gray-100 p-4',
          isDragActive && 'border-black bg-gray-200',
        )}
      >
        <input {...getInputProps()} />
        <Column y="center" x="center" className="gap-2">
          {!isDragActive ? (
            <DocumentIcon className="h-6 w-6" />
          ) : (
            <DocumentPlusIcon className="h-6 w-6" />
          )}
          {isDragActive ? (
            <p>Drop files here</p>
          ) : (
            <p>Drag or click to upload files</p>
          )}
        </Column>
      </div>
      {props.files.length > 0 && (
        <Column wGrow className="w-full bg-gray-100 border border-black gap-2">
          <Row grow className="w-full border-b border-black">
            <Row className="p-2 px-3" y="center" between grow>
              <InputLabel>{props.files.length} files</InputLabel>
              {loading && <Spinner size="xs" />}
            </Row>
          </Row>
          <Column wGrow className="gap-2 p-2 max-h-[300px] overflow-y-scroll">
            {props.files.map((e) => (
              <Row
                key={e.name}
                y="center"
                grow
                between
                className="border border-black bg-white px-4 py-2 w-full"
              >
                <p>{e.name}</p>
                <XMarkIcon
                  className={cn(
                    'h-4 w-4 cursor-pointer hover:bg-gray-200',
                    loading ? 'pointer-events-none opacity-50' : '',
                  )}
                  onClick={() =>
                    props.setFiles(props.files.filter((f) => f.name !== e.name))
                  }
                />
              </Row>
            ))}
          </Column>
        </Column>
      )}
    </Column>
  )
}

export default FileUpload
