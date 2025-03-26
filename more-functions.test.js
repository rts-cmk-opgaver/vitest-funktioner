import { describe, expect, test } from 'vitest';
import { calculateSum, checkIfPrime, findMaximumNumber, removeDuplicateElements } from './src/more-functions';

describe('calculateSum', () => {
  test('beregner summen af 1 og 2 til at være 3', () => {
    expect(calculateSum(1, 2)).toBe(3);
  });

  test('beregner summen af -1 og -1 til at være -2', () => {
    expect(calculateSum(-1, -1)).toBe(-2);
  });

  test('beregner summen af 0 og 0 til at være 0', () => {
    expect(calculateSum(0, 0)).toBe(0);
  });
});

describe('checkIfPrime', () => {
  test('kontrollerer om 2 er et primtal', () => {
    expect(checkIfPrime(2)).toBe(true);
  });

  test('kontrollerer om 4 er et primtal', () => {
    expect(checkIfPrime(4)).toBe(false);
  });

  test('kontrollerer om 17 er et primtal', () => {
    expect(checkIfPrime(17)).toBe(true);
  });
});

describe('findMaximumNumber', () => {
  test('finder det største tal i [1, 2, 3, 4, 5] til at være 5', () => {
    expect(findMaximumNumber([1, 2, 3, 4, 5])).toBe(5);
  });

  test('finder det største tal i [-10, -5, 0, 5, 10] til at være 10', () => {
    expect(findMaximumNumber([-10, -5, 0, 5, 10])).toBe(10);
  });

  test('finder det største tal i [100, 50, 200, 150] til at være 200', () => {
    expect(findMaximumNumber([100, 50, 200, 150])).toBe(200);
  });
});

describe('removeDuplicateElements', () => {
  test('fjerner dubletter fra [1, 2, 2, 3, 4, 4, 5] til at være [1, 2, 3, 4, 5]', () => {
    expect(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('fjerner dubletter fra [1, 1, 1, 1] til at være [1]', () => {
    expect(removeDuplicateElements([1, 1, 1, 1])).toEqual([1]);
  });

  test('fjerner dubletter fra [5, 4, 3, 2, 1, 1, 2, 3, 4, 5] til at være [5, 4, 3, 2, 1]', () => {
    expect(removeDuplicateElements([5, 4, 3, 2, 1, 1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});