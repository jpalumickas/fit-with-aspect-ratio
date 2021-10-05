# fit-with-aspect-ratio

Fit a original dimensions within a max/min boundaries while keeping its original aspect ratio

This package uses [fit-box][fit-box] under the hood with additional changes, like ability to specify minimum dimensions to scale down.

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

[fit-box]: https://github.com/christianhg/fit-box
