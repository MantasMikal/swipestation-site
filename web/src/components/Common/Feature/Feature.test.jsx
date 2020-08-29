import React from 'react'
import validateRequiredProps from 'libs/validate-required-props'
import { render } from '@testing-library/react'
import Feature from '.'

const requiredProps = () => ({ title: 'Default content' })

describe('Component: Feature', () => {
  validateRequiredProps(Feature, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Feature {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})

// expect(container.firstChild).toHaveClass('notice')
