import { assertEquals } from "testing/asserts.ts";

/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 *       @example
 *       Input: [1,2,0]
 *       Output: 3
 * 
 *       @example
 *       Input: [3,4,-1,1]
 *       Output: 2
 *       @example
 *       Input: [7,8,9,11,12]
 *       Output: 1
 */

Deno.test("first missing positive", () => {
  let fixtures = [{
    args: [1, 2, 3, 4, 5],
    expected: 6,
  }, {
    args: [5, 4, 3, 2, 1],
    expected: 6,
  }, {
    args: [-10, -11, 21],
    expected: 1,
  }, {
    args: [0, -1, 23, 20, 2, 1],
    expected: 3,
  }, {
    args: [2, 1],
    expected: 3,
  }, {
    args: [3, 4, -1, 1, 20],
    expected: 2,
  }, {
    args: [3, 4, 2, 1],
    expected: 5,
  }, {
    args: [1, 2, 0],
    expected: 3,
  }, {
    args: [-100, -234, -314, 12, 24, 6, 5, 4, 3, 2, 1, 0, 1],
    expected: 7,
  }, {
    args: [1, 1],
    expected: 2,
  }, {
    args: [2, 2],
    expected: 1,
  }, {
    args: [2],
    expected: 1,
  }];

  for (let index = 0; index < fixtures.length; index++) {
    const { args, expected } = fixtures[index];
    assertEquals(firstMissingPositive(args), expected);
  }
});
