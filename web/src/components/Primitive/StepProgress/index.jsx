import StepProgressWrapper from './component/StepProgressWrapper'
import StepProgressItem from './component/StepProgressItem'

const StepProgress = StepProgressWrapper
StepProgress.displayName = 'StepProgress'

StepProgress.Item = StepProgressItem
StepProgress.Item.displayName = 'StepProgress.Item'

export default StepProgress
