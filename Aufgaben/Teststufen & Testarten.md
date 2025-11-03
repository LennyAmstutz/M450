# Teststufen & Testarten

## Teststufen

| **Teststufe** | **Testbasis** | **Testobjekte** | **Testziele** | **Umgebung** | **Verantwortung** |
|----------------|----------------|------------------|----------------|----------------|----------------|
| **Komponententest** | Code, technische Doku | Einzelne Klassen oder Funktionen | Prüfen, ob jede Einheit richtig funktioniert | Entwicklungsumgebung | Entwickler |
| **Integrationstest** | Schnittstellen, Architektur | Zusammenspiel mehrerer Module | Prüfen, ob Module korrekt zusammenarbeiten | Testumgebung | Entwickler / Tester |
| **Systemtest** | Anforderungen, Use Cases | Gesamtes System | Prüfen, ob alles wie gewünscht funktioniert | Produktionsnahe Umgebung | Tester |
| **Abnahmetest** | Kundenanforderungen | Ganze Anwendung | Prüfen, ob System den Kundenwunsch erfüllt | Kundenumgebung | Kunde / Product Owner |

---

## Nicht funktionale Tests (Beispiel: Spotify)

| **Aspekt** | **Testziel** | **Testfall** |
|-------------|---------------|---------------|
| **Performance** | App bleibt schnell | Playlist mit 10'000 Songs laden – unter 2 Sekunden |
| **Benutzerfreundlichkeit** | App ist einfach zu bedienen | Neuer Nutzer erstellt Playlist ohne Hilfe |
| **Stabilität** | App bleibt stabil bei Fehlern | WLAN trennen – App darf nicht abstürzen |

---

## Nach Weiterentwicklung

| **Frage** | **Antwort** |
|------------|--------------|
| Regressionsfehler erlebt? | Ja, nach UI-Änderung funktionierten Buttons nicht mehr. |
| Wie verhindern? | Durch automatische Tests, Code-Reviews und CI-Pipeline. |
