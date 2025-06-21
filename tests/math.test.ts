import { add, subtract, multiply } from '../src/math';
import { test, expect } from '@jest/globals';

test('add 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('substract 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiply 4 * 2 = 8', () => {
    expect(multiply(4, 2)).toBe(8);
});