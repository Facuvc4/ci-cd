import { add, subtract, multiply } from '../src/math';
import { test, expect } from '@jest/globals';

test('sumar 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('restar 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplicar 4 * 2 = 8', () => {
    expect(multiply(4, 2)).toBe(8);
});