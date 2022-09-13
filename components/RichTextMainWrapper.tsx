import React, { ReactChild, ReactChildren } from 'react'

const RichTextMainWrapper = ({ children }: { children: ReactChild }) => {
  return (
    <div className='
                prose prose-slate dark:text-white lg:prose-lg mt-6
                prose-p:text-[16px] lg:prose-p:text-[17px]   prose-p:leading-8 
                prose-pre:overflow-x-auto dark:prose-headings:text-white
                prose-a:!text-primary prose-a:underline
                prose-pre:bg-dark dark:prose-pre:bg-dim-dark
                prose-h1:my-6 prose-h2:my-5 lg:prose-h2:my-6
                prose-h3:my-4 prose-h4:my-4 lg:prose-h4:my-6
                prose-h5:my-3 lg:prose-h5:my-4 prose-h6:my-3 lg:prose-h6:my-4
                prose-ul:leading-s8 prose-ul:text-[16px] prose-ul:w-[90%]
                prose-ol:leading-s8 prose-ol:text-[16px]
      '
    >{children}</div>
  )
}

export default RichTextMainWrapper