import { expect } from "jsr:@std/expect";
import { Board } from "./board.js";

Deno.test("gültiger Zug für Spieler 1", () => {
  const b = new Board();
  expect(b.isValidMove(1, 2, 3)).toBe(true);
});

Deno.test("ungültiger Zug – Feld besetzt", () => {
  const b = new Board();
  expect(b.isValidMove(1, 3, 3)).toBe(false);
});

Deno.test("ungültiger Spieler", () => {
  const b = new Board();
  expect(() => b.isValidMove(3, 2, 3)).toThrow();
});

Deno.test("Koordinate außerhalb Spielfeld", () => {
  const b = new Board();
  expect(() => b.isValidMove(1, -1, 0)).toThrow();
});

// -----------------------------

Deno.test("Spiel läuft noch (nicht fertig)", () => {
  const b = new Board();
  const result = b.result();
  expect(result.finished).toBe(false);
  expect(result.tied).toBe(false);
});

Deno.test("Sieg Spieler 1", () => {
  const fields = Array.from({ length: 8 }, () => Array(8).fill(1));
  const b = Board.of(fields);
  const result = b.result();
  expect(result.finished).toBe(true);
  expect(result.winner).toBe(1);
  expect(result.tied).toBe(false);
});

Deno.test("Sieg Spieler 2", () => {
  const fields = Array.from({ length: 8 }, () => Array(8).fill(2));
  const b = Board.of(fields);
  const result = b.result();
  expect(result.finished).toBe(true);
  expect(result.winner).toBe(2);
  expect(result.tied).toBe(false);
});

Deno.test("Unentschieden", () => {
  const fields = [];
  for (let r = 0; r < 8; r++) {
    const row = [];
    for (let c = 0; c < 8; c++) {
      row.push((r + c) % 2 === 0 ? 1 : 2);
    }
    fields.push(row);
  }
  const b = Board.of(fields);
  const result = b.result();
  expect(result.finished).toBe(true);
  expect(result.tied).toBe(true);
});
