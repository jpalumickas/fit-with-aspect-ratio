import optimalImageSize from './index';

test('has correct dimensions on vertical image', () => {
  const optimal = optimalImageSize({
    originalWidth: 100,
    originalHeight: 240,
    maxWidth: 50,
    maxHeight: 50,
  });

  expect(optimal).toEqual({
    width: 20.833333333333336,
    height: 50,
  });
});

test('has correct dimensions on horizontal image', () => {
  const optimal = optimalImageSize({
    originalWidth: 240,
    originalHeight: 100,
    maxWidth: 50,
    maxHeight: 50,
  });

  expect(optimal).toEqual({
    width: 50,
    height: 20.833333333333336,
  });
});

test('has correct dimensions when image is smaller', () => {
  const optimal = optimalImageSize({
    originalWidth: 16,
    originalHeight: 16,
    maxWidth: 50,
    maxHeight: 50,
  });

  expect(optimal).toEqual({
    width: 16,
    height: 16,
  });
});

test('has correct dimensions on vertical image with min dimensions', () => {
  const optimal = optimalImageSize({
    originalWidth: 100,
    originalHeight: 240,
    maxWidth: 50,
    maxHeight: 50,
    minWidth: 30,
    minHeight: 60,
  });

  expect(optimal).toEqual({
    width: 25.000000000000004,
    height: 60,
  });
});

test('has correct dimensions on vertical image with min dimensions', () => {
  const optimal = optimalImageSize({
    originalWidth: 16,
    originalHeight: 16,
    maxWidth: 400,
    maxHeight: 400,
    minWidth: 30,
    minHeight: 60,
  });

  expect(optimal).toEqual({
    width: 30,
    height: 30,
  });
});
