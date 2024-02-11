# Extranet - projekt stworzony przez Remigiusz Mrotek, Kacper Grudziński

Extranet - projekt stworzony przez Remigiusz Mrotek, Kacper Grudziński

## Opis

Aplikacja to Single Page Application stworzone w React, Typescript, Material-ui oraz wiele pomniejszych bibliotek.
Aktualnie to bardzo bazowa wersja systemu do zarządzania użytkownikami, przedmiotami oraz planami lekcji w szkole.
Dane są trzymane na Firebase Firestore.

### Przed startem aplikacji

#### Konfiguracja Firebase

Przed startem aplikacji wymagane jest stworzenie pliku `firebasecfg.json` w folderze `/src/`.
Nie został on dołączony do projektu w ramach bezpieczeństwa.

Przykład zawartości pliku konfiguracyjnego:

```
{
  "apiKey": "apiKey_value",
  "authDomain": "authDomain_value",
  "projectId": "projectId_value",
  "storageBucket": "storageBucket_value",
  "messagingSenderId": "messagingSenderId_value",
  "appId": "appId_value"
}
```

Wartości należy uzyskać z projektu w Firebase. Jest to wymagane aby aplikacja mogła połączyć się z bazą danych.

#### Instalacja modułów

Przed startem należy zainstalować pakiety przez komendę `npm i` (testowane na Node v16.19.0).

### Start aplikacji

Aplikację można wystartować komendą `npm start`. Aplikacja po skompilowaniu będzie dostępna pod adresem `http://localhost:3000/`.
