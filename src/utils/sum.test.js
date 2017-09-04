/**
 * @description imports function to test
 */
const sum = require('./sum');

/**
 * @description Tests sum function from utilities
 * @param  {number}
 * @param  {number}
 * @return {number}
 */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});