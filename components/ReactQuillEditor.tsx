import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    // [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    // [{ color: [] }, { background: [] }],
    // [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
}

interface EditorProos {
  handleChange: (e: string) => void
  hasErrors?: boolean
}

const ReactQuillEditor = ({ handleChange, hasErrors = false }: EditorProos) => {
  const [reactQuill, setReactQuill] = useState<any>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-quill').then((mod) => {
        setReactQuill(mod)
      })
    }
  }, [])

  if (reactQuill) {
    return (
      <div>
        <reactQuill.default
          modules={modules}
          theme="snow"
          onChange={handleChange}
          placeholder="Start typing in here... "
          style={{
            backgroundColor: '#edf1fd',
            padding: '10px',
            borderRadius: '10px',
            border: hasErrors ? '1px solid red' : 'none',
            maxHeight:"600px",
            overFlow:"scroll"
          }}
        ></reactQuill.default>
      </div>
    )
  }
  return null
}

export default ReactQuillEditor
