import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function TipTapReader({ content }) {
  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: 'scroll-mt-24',
          },
        },
      }),
    ],
    content,
  })

  return <EditorContent editor={editor} />
}
