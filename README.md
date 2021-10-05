# fit-with-aspect-ratio

## Installation

```sh
yarn add fit-with-aspect-ratio
```

## Usage

```js
import fitWithAspectRatio from 'fit-with-aspect-ratio';

const { width, height } = fitWithAspectRatio({
  originalWidth: 300,
  originalHeight: 400,
  maxWidth: 100,
  maxHeight: 30,
  minWidth: 10,
  minHeight: 10,
})
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
