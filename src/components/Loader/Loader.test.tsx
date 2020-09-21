import React from 'react'
import { screen, render } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader (unit)', () => {
  it('renders children when not loading', () => {
    const { queryByText } = render(
      <Loader isLoading={false} loadingElement={<div>placeholder-elem</div>}>
        <div>test child</div>
      </Loader>
    )
    expect(screen.getByText('test child')).toBeTruthy()
    expect(queryByText(/loading/)).not.toBeTruthy()
  })

  it('renders default loading element when loading and no loading element passed', () => {
    const { queryByText } = render(
      <Loader isLoading={true}>
        <div>test child</div>
      </Loader>
    )
    expect(queryByText('test child')).not.toBeTruthy()
    expect(screen.getByText(/loading/)).toBeTruthy()
  })

  it('renders passed loading element', () => {
    render(
      <Loader isLoading={true} loadingElement={<div>will load soon</div>}>
        <div>test child</div>
      </Loader>
    )
    expect(screen.getByText(/will\ load\ soon/)).toBeTruthy()
  })
})
