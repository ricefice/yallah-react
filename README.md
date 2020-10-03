# **yallah-react**

> quick and simple react components

## Install

```sh
npm i --save yallah-react
```

## Components

* [Loader](#loader)
* [Hider](#hider)
* [SectionAlternator](#sectionalternator)

## **Loader**

| props           | type         | description                                                                   |
|-----------------|--------------|-------------------------------------------------------------------------------|
| isLoading       | boolean      | shows loadingElement in place of children if true                             |
| children        | JSX | JSX[]  | element(s) to display when loading complete                                   |
| loadingElement? | JSX          | overrides default loading element that replaces above element(s) when loading |

### Loader Usage

```tsx
import {Loader} from 'yallah-react'

const customLoadingSpinner = <div>custom loading spinner</div>

<Loader
  isLoading={this.state.isLoading}
  loadingElement={customLoadingSpinner}
>
  <div>element that should show after loading complete</div>
</Loader>
```

## **Hider**

| props               | type         | description                                                     |
|---------------------|--------------|-----------------------------------------------------------------|
| isHidden            | boolean      | hides children and shows loadingElement if defined              |
| children            | JSX | JSX[]  | element(s) to display when not hidden                           |
| placeholderElement? | JSX          | optional element that will replace above element(s) when hidden |

### Hider Usage

```tsx
import {Hider} from 'yallah-react'

const customPlaceholder = <div>custom placeholder</div>

<Hider
  isHidden={this.state.isHidden}
  placeholderElement={customPlaceholder}
>
  <div>element that should show when not hidden</div>
</Hider>
```

## **SectionAlternator**

| props               | type                              | description                                                                                   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| children            | JSX[]                             | element(s) to display when not hidden                                                         |
| wrapElemStyles      | { [styleKey: string]: string }[]  | css styles to be applied to alternating sections (requires 2 min)                             |
| keyPrefix           | string                            | unique (for each instance of SectionAlternator) prefix used to generate keys for section items|
| wrapElemType?       | string                            | optional tagname for wrapping element to override default 'div'                               |

### SectionAlternator Usage

```tsx
import {SectionsAlternator} from 'yallah-react'
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
```

## License

MIT © [ricefice](https://github.com/ricefice)
