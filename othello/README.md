# Othello – Blackbox-Testverfahren

## Ziel

Es werden zwei Testverfahren umgesetzt:

1. Äquivalenzklassenbildung für `Board.isValidMove(player, row, col)`
2. Grenzwertanalyse für `Board.result().tied`

---

## Vorgehen

### 1. Äquivalenzklassenbildung

Ziel: Prüfen, ob ein Zug für einen Spieler an einer bestimmten Position erlaubt ist.

#### Definitionsbereiche

| Parameter    | Gültige Werte          | Ungültige Werte           |
| ------------- | ---------------------- | ------------------------- |
| `player`      | 1 (Schwarz), 2 (Weiss) | 0, 3, -1, null, undefined |
| `row`, `col`  | 0–7                    | <0 oder >7                |

#### Äquivalenzklassen

| Eingabeparameter                                           | Klasse   | Erwartung       |
| ---------------------------------------------------------- | -------- | --------------- |
| `player=1,2`                                               | gültig   | Prüfung erlaubt |
| `player≠1,2`                                               | ungültig | Exception       |
| `row,col` ∈ [0,7]                                          | gültig   | Prüfung erlaubt |
| `row,col` ∉ [0,7]                                          | ungültig | Exception       |
| Feld leer + Gegnerstein in Richtung + eigener Stein danach | gültig   | `true`          |
| Feld leer + kein Gegnerstein in Richtung                   | gültig   | `false`         |
| Feld besetzt                                               | ungültig | `false`         |

---

### 2. Grenzwertanalyse (`result().tied`)

Ziel: Überprüfen, ob die Methode `result()` korrekte Resultate für Spielende liefert.

| Zustand          | Beschreibung                 | Erwartung                      |
| ---------------- | ---------------------------- | ------------------------------ |
| Spiel läuft noch | leere Felder vorhanden       | `finished=false`, `tied=false` |
| Sieg Spieler 1   | alle Felder belegt, mehr 1er | `winner=1`, `tied=false`       |
| Sieg Spieler 2   | alle Felder belegt, mehr 2er | `winner=2`, `tied=false`       |
| Unentschieden    | gleich viele 1er/2er         | `tied=true`                    |

---

## Implementierung

### `Board.isValidMove(player, row, col)`

Diese Methode wird in **board.js** ergänzt:

```js
isValidMove(player, row, col) {
  if (player !== one && player !== two) {
    throw new RangeError(`illegal player ${player}`);
  }
  if (row < 0 || row >= dimension || col < 0 || col >= dimension) {
    throw new RangeError(`move [${row}/${col}] out of bounds`);
  }
  if (this.fields[row][col] !== empty) {
    return false;
  }

  const valid = [...this.validMoves(player)].some(
    (move) => move[0] === row && move[1] === col
  );
  return valid;
}
