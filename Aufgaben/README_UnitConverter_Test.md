# Unit Converter – Testbericht

## Testobjekt  
Die Beispielanwendung **Unit Converter** mit Eingabefeld, Dropdown-Auswahl und Convert-Button.

## Testbasis  
Die vorgegebenen Umrechnungsraten im Code (`conversions`-Array) sowie die sichtbare Benutzeroberfläche.

## Testergebnisse  

- **km → mi**: korrekt (1 km = 0.621371 mi)  
- **m → ft**: korrekt (1 m = 3.28084 ft)  
- **ft → m**: korrekt (1 ft = 0.3048 m)  
- **l → oz**: korrekt (1 l = 33.814 oz)  
- **kg → lbs**: falsch (im Code steht 0.45359237, das entspricht lbs → kg und nicht umgekehrt)  

## Fehleranalyse  
- **Fehlerwirkung**: Falsches Ergebnis bei Umrechnung **kg → lbs** (zu kleiner Wert).  
- **Fehlerzustand**: Umrechnungsfaktor wurde verkehrt im Array gespeichert.  

## Fazit  
Die Anwendung funktioniert grundsätzlich, aber nicht alle Umrechnungen sind richtig.  
Der Fehler liegt bei der Gewichtsumrechnung.
