import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface RichTextProps {
  content: any
}

const RichTextDisplay = ({ content }: RichTextProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content ?? '',
    editable: false,
  })

  return (
    <div className="
                 
                  prose-headings:scroll-mt-24 prose-headings:font-bold
                  prose-h1:text-4xl prose-h1:mb-10 prose-h1:text-white prose-h1:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-8 prose-h2:text-indigo-300
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-purple-300
                  prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4 prose-h4:text-fuchsia-300
                  prose-p:text-slate-200 prose-p:leading-8 prose-p:mb-7 prose-p:text-[1.06rem]
                  prose-p:first-of-type:text-lg prose-p:first-of-type:font-medium prose-p:first-of-type:mt-0    
                  prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-a:transition-all prose-a:duration-200    
                  prose-code:text-pink-300 prose-code:bg-slate-900/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium
                  prose-pre:bg-slate-950 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:shadow-inner prose-pre:border prose-pre:border-slate-700/50 prose-pre:my-8 prose-pre:text-sm           
                  prose-ul:ml-6 prose-ul:list-disc prose-ul:marker:text-indigo-400 prose-li:mb-2 prose-li:text-slate-300
                  prose-ol:ml-6 prose-ol:list-decimal prose-ol:marker:text-indigo-400
                   prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:pr-4
                  prose-blockquote:italic prose-blockquote:text-slate-300 prose-blockquote:bg-slate-900/40 prose-blockquote:rounded-r-xl prose-blockquote:my-8   
                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-700/50 prose-img:mx-auto prose-img:my-10 hover:prose-img:scale-[1.02] prose-img:transition-transform prose-img:duration-500 
                  prose-table:border-collapse prose-table:w-full prose-th:bg-slate-800/60 prose-th:p-3 prose-th:text-indigo-300 prose-th:border prose-th:border-slate-700
                  prose-td:p-3 prose-td:border prose-td:border-slate-800 prose-td:text-slate-300
                ">
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextDisplay
