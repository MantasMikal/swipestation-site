import React from 'react'
import { storiesOf } from '@storybook/react'

import StepProgress from '.'

const stories = storiesOf('Specific/StepProgress', module)

stories.add(
  'Info',
  () => (
    <StepProgress>
      <StepProgress.Item complete>Choose</StepProgress.Item>
      <StepProgress.Item complete>Details</StepProgress.Item>
      <StepProgress.Item complete>Payment</StepProgress.Item>
      <StepProgress.Item current>Confirm</StepProgress.Item>
      <StepProgress.Item>Complete</StepProgress.Item>
    </StepProgress>
  ),
  {
    info: {
      inline: true,
      text: `
      TBC
    `
    }
  }
)

stories.add('Default state', () => (
  <StepProgress>
    <StepProgress.Item complete>Choose</StepProgress.Item>
    <StepProgress.Item complete>Details</StepProgress.Item>
    <StepProgress.Item complete>Payment</StepProgress.Item>
    <StepProgress.Item current>Confirm</StepProgress.Item>
    <StepProgress.Item>Complete</StepProgress.Item>
  </StepProgress>
))

stories.add('Custom status', () => (
  <StepProgress>
    <StepProgress.Item status="positive">Choose</StepProgress.Item>
    <StepProgress.Item status="negative">Details</StepProgress.Item>
    <StepProgress.Item status="positive">Payment</StepProgress.Item>
    <StepProgress.Item current>Confirm</StepProgress.Item>
    <StepProgress.Item>Complete</StepProgress.Item>
  </StepProgress>
))

stories.add('Looping numbers', () => {
  const items = ['Choose', 'Details', 'Payment', 'Confirm', 'Complete']
  const currentStep = 4
  return (
    <StepProgress>
      {items.map((item, i) => {
        const step = i + 1
        return (
          <StepProgress.Item
            key={step}
            complete={step < currentStep}
            current={step === currentStep}
          >
            {item}
            <div style={{ fontSize: '0.8em' }}>
              Step {step} of {items.length}
            </div>
          </StepProgress.Item>
        )
      })}
    </StepProgress>
  )
})
