# Arbeitspaket B – Methoden `of` und `copy`

## Was macht der Programmcode?

- `of(fields)` prüft Spielfeldstruktur
  - 8 Zeilen, 8 Spalten
  - Werte: 0 (leer), 1 (Spieler 1), 2 (Spieler 2)
  - erstellt neues `Board`-Objekt mit diesen Feldern
- `copy()`
  - erstellt tiefe Kopie des Spielfelds
  - ruft `Board.of(rows)` auf → neues, unabhängiges Board
  - alte und neue Spielfelder beeinflussen sich nicht

## Zweck im Spiel

- `of`: sicheres Erzeugen eines gültigen Spielfelds
- `copy`: neues Board für Spielzug ohne Original zu verändern
- unterstützt immutables Design (keine Seiteneffekte)
- wichtig für Nachvollziehbarkeit, Stabilität und Tests
