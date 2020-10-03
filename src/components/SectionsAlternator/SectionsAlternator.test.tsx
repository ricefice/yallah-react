import React from 'react'
import { screen, render } from '@testing-library/react'

import { SectionsAlternator } from './SectionsAlternator'

describe('SectionsAlternator (unit)', () => {
    it('throws error if no wrapElemStyles prop given', () => {
        spyOn(console, "error")
        expect(() =>
            render(
                <SectionsAlternator
                    //@ts-ignore
                    wrapElemStyles={null}>
                    <div>test section 1</div>
                    <div>test section 2</div>
                </SectionsAlternator>
            )
        ).toThrow(new Error('missing prop: wrapElemStyles prop is required'))
    })

    it('throws error if no children given', () => {
        spyOn(console, "error")
        expect(() =>
            render(
                <SectionsAlternator
                    wrapElemStyles={[
                        { backgroundColor: 'white' },
                        { backgroundColor: 'black' }
                    ]}
                >
                </SectionsAlternator>
            )
        ).toThrow(new Error('missing prop: children elements are required'))
    })

    it('throws error if less than 2 wrapElemStyles given', () => {
        spyOn(console, "error")
        expect(() =>
            render(
                <SectionsAlternator
                    wrapElemStyles={[
                        { backgroundColor: 'white' },
                    ]}
                >
                    <div>test section 1</div>
                    <div>test section 2</div>
                </SectionsAlternator>
            )
        ).toThrow(new Error('wrapElemStyles prop should contain at least 2 items for alternating effect'))
    })

    it('renders alternating elements using specified wrapElemStyles', () => {
        spyOn(console, "error")
        render(
            <SectionsAlternator
                wrapElemStyles={[
                    { backgroundColor: 'white' },
                    { backgroundColor: 'black' },
                ]}
            >
                <div>test section 1</div>
                <div>test section 2</div>
                <div>test section 3</div>
                <div>test section 4</div>
            </SectionsAlternator>
        )
        const testSectionExistsAndParentStyle = (sectionRegex: RegExp, expectedStyle: string) => {
            const section = screen.getByText(sectionRegex)
            expect(section).toBeInTheDocument()
            expect(section.parentElement).toHaveStyle(expectedStyle)
        }
        testSectionExistsAndParentStyle(/test section 1/, 'background-color: white')
        testSectionExistsAndParentStyle(/test section 2/, 'background-color: black')
        testSectionExistsAndParentStyle(/test section 3/, 'background-color: white')
        testSectionExistsAndParentStyle(/test section 4/, 'background-color: black')
    })

    it('overrides default div type section to given wrapElemType', () => {
        spyOn(console, "error")
        render(
            <SectionsAlternator
                wrapElemStyles={[
                    { backgroundColor: 'white' },
                    { backgroundColor: 'black' },
                ]}
                wrapElemType='h1'
            >
                <div>test section 1</div>
                <div>test section 2</div>
            </SectionsAlternator>
        )
        const section = screen.getByText(/test section 1/)
        expect(section).toBeInTheDocument()
        expect(section.parentElement!.tagName).toBe('H1')
    })

})
