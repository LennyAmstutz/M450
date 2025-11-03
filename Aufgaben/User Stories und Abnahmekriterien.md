# Unit Converter – User Stories & Abnahmekriterien

## Agiles Vorgehen
Ein agiles Vorgehen ist hier sinnvoll, da:
- die Anforderungen nur grob formuliert sind und sich im Projekt konkretisieren,  
- Feedback vom Auftraggeber früh einfließen kann,  
- kleine, testbare Schritte (Umrechnungspakete) umgesetzt werden können.  

---

## User Stories

### US-1 – Basis-Umrechnung
**Als** Nutzer  
**möchte ich** einen Wert von einer Einheit in eine andere eingeben und umrechnen  
**damit** ich sofort das Ergebnis erhalte.  

**Akzeptanzkriterien**
- Eingabe eines numerischen Werts und Auswahl von Quelle- und Zieleinheit möglich.  
- Nach Klick auf „Convert“ wird ein korrektes Ergebnis angezeigt.  

---

### US-2 – Unterstützte Einheiten
**Als** Nutzer  
**möchte ich** die gebräuchlichsten Einheiten (km↔mi, m↔ft, l↔oz, kg↔lb) umrechnen können  
**damit** ich Alltagssituationen abdecken kann.  

**Akzeptanzkriterien**
- Alle genannten Paare funktionieren in beide Richtungen.  
- Ergebnis stimmt mit hinterlegten Umrechnungsfaktoren überein (Toleranz ±0.1 %).  

---

### US-3 – Eingabevalidierung
**Als** Nutzer  
**möchte ich** klare Fehlermeldungen bei ungültigen Eingaben sehen  
**damit** ich weiß, wie ich korrigieren muss.  

**Akzeptanzkriterien**
- Leere, nicht-numerische oder negative Eingaben erzeugen eine Fehlermeldung.  
- Bei nicht unterstützter Kombination erscheint ein Hinweis.  

---

### US-4 – Darstellung
**Als** Nutzer  
**möchte ich** ein lesbares, rundes Ergebnis und einfache Bedienung  
**damit** ich die App auch schnell unterwegs nutzen kann.  

**Akzeptanzkriterien**
- Ergebnisse werden auf 3 Nachkommastellen gerundet.  
- UI ist auf Desktop und Mobile nutzbar.  
- Labels sind mit Eingaben verknüpft (Barrierefreiheit).  
