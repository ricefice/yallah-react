import * as React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  isHidden: boolean
  placeholderElement?: JSX.Element
}

export class Hider extends React.Component<Props> {
  render() {
    const { isHidden, placeholderElement, children } = this.props
    return isHidden ? (
      placeholderElement || null
    ) : (
      <React.Fragment>{children}</React.Fragment>
    )
  }
}
