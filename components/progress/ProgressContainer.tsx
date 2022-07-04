import { ReactNode } from 'react'

export type ProgressContainerProps = {
  animationDuration: number
  isFinished: boolean
  children: ReactNode
}

export const ProgressContainer = ({
  animationDuration,
  isFinished,
  children,
}: ProgressContainerProps) => {
  return (
    <div
      className="pointer-events-none z-[99999]"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  )
}
