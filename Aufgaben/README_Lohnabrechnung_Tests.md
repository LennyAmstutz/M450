# Lohnabrechnung Test

## Testziele

- AHV/IV/EO erst ab 1. Januar nach dem 17. Geburtstag
- ALV + NBU ab Jahreslohn ≥ 2 500 CHF
- PK ab Jahreslohn ≥ 22 680 CHF
- Abzüge und Netto korrekt berechnet

## Abstrakte Testfälle

1. Altersgrenze prüfen
2. Grenze 500 CHF prüfen
3. Grenze 680 CHF prüfen

## Konkrete Testfälle

### TC-1 (Altersgrenze)

- Geburtsdatum: 31.12.2008
- Monatslohn: 1 000 CHF
- Erwartet: keine AHV/IV/EO, kleine Abzüge, Netto ca. 982 CHF

### TC-2 (Grenze 2 500)

- Geburtsdatum: 01.01.1990
- Monatslohn: 208.33 CHF (Jahreslohn 2 500)
- Erwartet: inkl. ALV + NBU, Netto ca. 182 CHF

### TC-3 (Grenze 22 680)

- Geburtsdatum: 01.01.1990
- Monatslohn: 1 890 CHF (Jahreslohn 22 680)
- Erwartet: inkl. PK, Netto ca. 1 487 CHF

## Testprotokoll

- TC-1: FAIL – Abzüge falsch
- TC-2: FAIL – ALV/NBU fehlen
- TC-3: FAIL – PK fehlt
