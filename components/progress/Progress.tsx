import { useNProgress } from '@tanem/react-nprogress';
import { ProgressContainer } from './ProgressContainer';
import { ProgressBar } from './ProgressBar';


export type ProgressProps = {
  isAnimating: boolean
}

export const Progress = ({ isAnimating }: ProgressProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <ProgressContainer animationDuration={animationDuration} isFinished={isFinished}>
      <ProgressBar animationDuration={animationDuration} progress={progress} />
    </ProgressContainer>
  )
}
