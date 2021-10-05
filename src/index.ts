import { fitBox } from 'fit-box';

type Options = {
  width: number;
  height: number;
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  minHeight?: number;
}

// Calculates image size to fit it maxWidth, maxHeight keeping aspect ratio
const optimalImageSize = ({
  width,
  height,
  maxWidth = width,
  maxHeight = height,
  minWidth = 0,
  minHeight = 0,
}: Options) => {
  if (
    width <= maxWidth &&
    height <= maxHeight &&
    width <= minWidth &&
    height <= minHeight
  ) {
    return fitBox({
      boundary: { width: minWidth, height: minHeight },
      box: { width, height },
    });
  }

  if (width <= maxWidth && height <= maxHeight) {
    return { width, height };
  }

  const result = fitBox({
    boundary: { width: maxWidth, height: maxHeight },
    box: { width, height },
  });

  if (result.width < minWidth || result.height < minHeight) {
    return fitBox({
      boundary: {
        width: Math.max(minWidth, maxWidth),
        height: Math.max(minHeight, maxHeight),
      },
      box: { width: result.width, height: result.height },
    });
  }

  return result;
};

export default optimalImageSize;
