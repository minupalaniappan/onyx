import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
type FileUploadProps = {
  onDrop: (files: File[]) => void
}

export const FileUpload = (props: FileUploadProps) => {
  console.info('FileUpload', props)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop files here, or click to select files</p>
      )}
    </div>
  )
}

export default FileUpload
