import { expect } from "jsr:@std/expect";
import { fibonacci } from "./fibonacci.js";

Deno.test("Fibonacci 0", () => {
  expect(fibonacci(0)).toBe(1);
});

Deno.test("Fibonacci 1", () => {
  expect(fibonacci(1)).toBe(1);
});

Deno.test("Fibonacci rekursiv", () => {
  expect(fibonacci(5)).toBe(8);
});

Deno.test("Fibonacci negative Zahl (if schlägt fehl)", () => {
  expect(fibonacci(-1)).toBe(undefined);
});

Deno.test("Fibonacci falscher Datentyp (if schlägt fehl)", () => {
  expect(fibonacci("x")).toBe(undefined);
});
