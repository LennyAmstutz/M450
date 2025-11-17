import { expect } from "jsr:@std/expect";
import { solve } from "./quadratic_equation.ts";

Deno.test("zwei Lösungen", () => {
  const result = solve(1, -3, 2);
  expect(result.length).toBe(2);
});

Deno.test("eine Lösung", () => {
  const result = solve(1, -2, 1);
  expect(result.length).toBe(1);
  expect(result[0]).toBe(1);
});

Deno.test("keine Lösung", () => {
  const result = solve(1, 0, 1);
  expect(result).toEqual([]);
});
