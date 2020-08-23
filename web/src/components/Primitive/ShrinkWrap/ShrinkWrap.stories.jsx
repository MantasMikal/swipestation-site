import React from 'react'

import ShrinkWrap from '.'

export default {
  title: 'Utility/ShrinkWrap',
  component: ShrinkWrap
}

export const Default = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <p style={{ background: '#FCCA74' }}>Aenean eu leo quam.</p>
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

// const stories = storiesOf('Utility/ShrinkWrap', module)

export const MultipleItems = (args) => (
  <ShrinkWrap {...args}>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const CustomWrappingElement = (args) => (
  <ShrinkWrap {...args} as="label">
    <ShrinkWrap.Item shrink>
      <input type="checkbox" />
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>I agree to the terms and conditions</ShrinkWrap.Item>
  </ShrinkWrap>
)

export const EvenSpacing = (args) => (
  <ShrinkWrap {...args} fixed fullWidth>
    <ShrinkWrap.Item shrink>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum.
    </ShrinkWrap.Item>
    <ShrinkWrap.Item shrink>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const NoWrappingForShrinkItems = (args) => (
  <ShrinkWrap fullWidth {...args}>
    <ShrinkWrap.Item noWrap>
      <span role="img" aria-label="Rocket">
        🚀
      </span>
      Aenean eu leo
    </ShrinkWrap.Item>
    <ShrinkWrap.Item>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae
      elit libero, a pharetra augue. Donec sed odio dui.
    </ShrinkWrap.Item>
  </ShrinkWrap>
)

export const GeneralSpacingExamples = (args) => (
  <>
    <em>Default state:</em>
    <ShrinkWrap {...args} spacing="comfortable">
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, auto layout:</em>
    <ShrinkWrap {...args} spacing="comfortable" fullWidth>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
    <hr style={{ margin: '20px 0' }} />
    <em>Full-width, fixed layout:</em>
    <ShrinkWrap {...args} spacing="comfortable" fullWidth fixed>
      <ShrinkWrap.Item>Item one</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item two</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item three is longer</ShrinkWrap.Item>
      <ShrinkWrap.Item>Item four</ShrinkWrap.Item>
    </ShrinkWrap>
  </>
)
