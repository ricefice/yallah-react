import React from 'react'
import { screen, render } from '@testing-library/react'
import { Hider } from './Hider'

describe('Hider (unit)', () => {
  it('renders children when not hidden', () => {
    render(
      <Hider isHidden={false}>
        <div>not hidden elem</div>
      </Hider>
    )
    expect(screen.getByText('not hidden elem')).toBeTruthy()
  })

  it('does not render children when hidden', () => {
    const { queryByText } = render(
      <Hider isHidden={true}>
        <div>hidden elem</div>
      </Hider>
    )
    expect(queryByText('not hidden elem')).not.toBeTruthy()
  })

  it('renders placeholder when hidden', () => {
    render(
      <Hider isHidden={true} placeholderElement={<div>placeholder-elem</div>}>
        <div>not hidden elem</div>
      </Hider>
    )
    expect(screen.getByText('placeholder-elem')).toBeTruthy()
  })
})
