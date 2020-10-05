import { assertEquals } from "testing/asserts.ts";

/**
 * Given a string, remove the vowels from the string and return the string without vowels.
 * 
 *       @example 
 *       Input : what is your name ?
 *       Output : wht s yr nm ?
 * 
 */

Deno.test("removeVowels", () => {
  let actual = removeVowels("what is your name ?");
  let expected = "wht s yr nm ?";

  assertEquals(actual, expected);
});
