# 1. [Daten mit JSX anzeigen](https://www.robinwieruch.de/react-pass-props-to-component)

Bevor du beginnst

- Navigiere in deinem Terminal zum Verzeichnis `task-01`.
- Installiere die Abhängigkeiten mit `npm install`.

## Anleitung

Zeige die unten angegebenen Benutzerdaten mit JSX an.

Die Anforderungen sind:

- Daten anzeigen
- Binde die Daten an das HTML-Attribut `<img src=???>`
- Erstelle einen Link zum Twitter-Profil des Nutzers: `https://twitter.com/tim`
- Verwende `Array.prototype.map()`, um alle Unternehmen (companies) aufzulisten

```js
const user = {
  Name: "Jeff Bezos",
  Stadt: "Albuquerque",
  geboren: "1964",
  mag: "Reich sein",
  twitterLink: "https://twitter.com/jeffbezos",
  img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
  twitterName: "JeffBezos",
  Unternehmen: [
    "Amazon",
    "The Washington Post",
    "Google-Aktieninhaber",
    "IMBD",
    "Alexa",
    "Blue Origin",
    "Twitch",
    "Zappos",
    "Whole Food Market",
    "Amazon Robotics",
    "Goodreads",
  ],
};
```

## So sieht die endgültige Anwendung aus

![Beispiel](./public/task-01.png)

> Bonusaufgabe, wenn du am Ende der Prüfung mehr Zeit hast
>
> Erstelle eine wiederverwendbare Komponente für die Benutzerdaten. Übergib ihr Daten mit Hilfe von props.
