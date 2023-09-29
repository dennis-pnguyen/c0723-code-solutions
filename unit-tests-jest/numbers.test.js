import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 11.341;
    const result = toDollars(amount);
    expect(result).toEqual(`$11.34`);
  });
  it('undefined should return "Amount must be an integer or fractional number."', () => {
    const result = toDollars(undefined);
    expect(result).toEqual('Amount must be an integer or fractional number.');
  });
  it('NaN should return "Amount must be an integer or fractional number."', () => {
    const result = toDollars(NaN);
    expect(result).toEqual('Amount must be an integer or fractional number.');
  });
  it(' " " should return "Amount must be an integer or fractional number."', () => {
    const result = toDollars('');
    expect(result).toEqual('Amount must be an integer or fractional number.');
  });
});

describe('divideBy', () => {
  it('returns an array where every entry has been divided by the divisor', () => {
    const result = divideBy([2, 4, 6, 8, 10], 2);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it('returns an array where divisor is NaN', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 'baz';
    expect(() =>
      divideBy(numbers, divisor).toThrow('Divisor must be a number.')
    );
  });
});

describe('multiplyBy', () => {
  it('returns input obj with values that have been multiplied by multiplier', () => {
    const obj = {
      key1: 2,
      key2: 4,
      key3: 6,
    };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    const input = {
      key1: 6,
      key2: 12,
      key3: 18,
    };
    expect(result).toEqual(input);
  });
  it('returns input obj with same value if key is a string', () => {
    const obj = {
      key1: 'hello',
      key2: 'world',
      key3: 8,
    };
    const multiplier = 8;
    const result = multiplyBy(obj, multiplier);
    const input = {
      key1: 'hello',
      key2: 'world',
      key3: 64,
    };
    expect(result).toEqual(input);
  });
});
