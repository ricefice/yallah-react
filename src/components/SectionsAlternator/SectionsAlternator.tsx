import React from 'react'

interface Props {
    children: JSX.Element[]
    wrapElemStyles: { [styleKey: string]: string }[]
    wrapElemType?: string
}

export class SectionsAlternator extends React.Component<Props> {
    render() {
        const { children, wrapElemStyles, wrapElemType } = this.props
        if (!children || !children.length) {
            throw new Error('missing prop: children elements are required')
        }
        if (!wrapElemStyles || !wrapElemStyles.length) {
            throw new Error('missing prop: wrapElemStyles prop is required')
        }
        if (wrapElemStyles.length < 2) {
            throw new Error('wrapElemStyles prop should contain at least 2 items for alternating effect')
        }
        return children.map((c: JSX.Element, i: number) => {
            const wrapElemStyleIndex = i % (!!wrapElemStyles && wrapElemStyles.length ? wrapElemStyles.length : 2)

            return React.createElement(
                !!wrapElemType ? wrapElemType : 'div',
                {
                    style: {
                        ...wrapElemStyles[wrapElemStyleIndex]
                    },
                    children: c
                }
            )
        })
    }
}