import * as React from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
  isLoading: boolean
  loadingElement?: JSX.Element
}

export const Loader = ({ children, isLoading, loadingElement }: Props) => {
  const defaultLoadingElement = <div>loading ...</div>
  return isLoading ? (
    loadingElement || defaultLoadingElement
  ) : (
    <React.Fragment>{children}</React.Fragment>
  )
}
