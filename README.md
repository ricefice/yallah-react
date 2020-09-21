# **yallah-react**

> quick and simple react components

## Install

```sh
npm i --save yallah-react
```

## Components

* [Loader](#loader)
* [Hider](#hider)

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

### props

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

## License

MIT © [ricefice](https://github.com/ricefice)
