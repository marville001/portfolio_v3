export type ProgressBarProps = {
  animationDuration: number
  progress: number
}

export const ProgressBar = ({ animationDuration, progress }: ProgressBarProps) => {
  return (
    <div
      className="fixed top-20 z-[1001] h-1 rounded-md w-full bg-red-600"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  )
}
