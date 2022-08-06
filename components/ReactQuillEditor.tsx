import React, { useEffect, useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css'


interface EditorProos {
  handleChange: (e: string) => void
  hasErrors?: boolean
  value?: string;
}

const styles = (hasErrors: boolean) => ({
  backgroundColor: '#edf1fd',
  padding: '10px',
  borderRadius: '10px',
  border: hasErrors ? '1px solid red' : 'none',
  maxHeight: "600px",
  overFlow: "scroll"
})

const ReactQuillEditor = ({ handleChange, hasErrors = false, value = "" }: EditorProos) => {
  const [reactQuill, setReactQuill] = useState<any>()

  const modules = useMemo(
    () => ({
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
      clipboard: {
        matchVisual: false
      }
    }),
    []
  );

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
        {value === "" ? <reactQuill.default
          modules={modules}
          theme="snow"
          onChange={handleChange}
          placeholder="Start typing in here... "
          style={styles(hasErrors)}
        ></reactQuill.default> : <reactQuill.default
          modules={modules}
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder="Start typing in here... "
          style={styles(hasErrors)}
        ></reactQuill.default>}
      </div>
    )
  }
  return null
}

export default ReactQuillEditor
