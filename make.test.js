import { evenOrOdd } from './make.js';

describe('evenOrOdd', () => {
  test('it should return Odd || [Impar] when parameter is 5', () => {
    const x = 5;
    const expected = 'Odd || [Impar]';
    const result = evenOrOdd(x);
    expect(result).toBe(expected);
  });
});

test('When parameter is 3 function evenOrOdd returns Odd || [Impar]', () => {
  const x = 3;
  const expected = 'Odd || [Impar]';
  const result = evenOrOdd(x);
  expect(result).toBe(expected);
});

test('When parameter is 4 function evenOrOdd returns Even || [Par]', () => {
  const x = 4;
  const expected = 'Even || [Par]';
  const result = evenOrOdd(x);
  expect(result).toBe(expected);
});
