# 2. [Kästchen nach oben bewegen](https://malcoded.com/posts/react-component-style/)

Bevor du beginnst

- Navigiere in deinem Terminal zum Verzeichnis `task-02`
- Installiere die Abhängigkeiten mit  `npm install`.

## Anleitung

Das Ziel dieser Aufgabe ist es, das Kästchen nach oben zu bewegen, wenn der Button angeklickt wird.

Die Anforderungen sind:

- Verwende eine Zustandsvariable (state), um den Wert der Transformationspunkte zu speichern.
- Erstelle einen Event-Handler, der die Transformationspunkte verringert, wenn der Button angeklickt wird.
- Verwende den Wert der Transformationspunkte mit Inline-CSS, um das Kästzchen nach oben zu verschieben.

## So sieht die fertige Anwendung aus

![Beispiel](./public/task-02.gif)

> Tipp: Verwende inline style
>
> `translateY(${transformationPoints}px)`
