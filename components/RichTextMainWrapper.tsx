import React, { ReactChild, ReactChildren } from 'react'

const RichTextMainWrapper = ({ children }: { children: ReactChild }) => {
  return (
    <div className='flex-1
                prose lg:prose-lg mt-6 
                prose-p:text-[16px] lg:prose-p:text-[17px]   prose-p:leading-8 
                prose-pre:bg-dim-dark prose-pre:text-[10px] sm:prose-pre:text-[12px] lg:prose-pre:text-[16px]
                prose-a:!text-primary prose-a:underline
                prose-h1:my-6 lg:prose-h1:my-8 prose-h2:my-5 lg:prose-h2:my-7
                prose-h3:my-4 lg:prose-h3:my-6 prose-h4:my-4 lg:prose-h4:my-6
                prose-h5:my-3 lg:prose-h5:my-4 prose-h6:my-3 lg:prose-h6:my-4
                prose-ul:leading-8 prose-ol:leading-8 prose-ul:text-[16px] prose-ol:text-[16px]
                '>{children}</div>
  )
}

export default RichTextMainWrapper