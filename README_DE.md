# Grundlagen der Programmierung - Examen 1

- Arbeite im `main` Branch
- Arbeite in der Datei `solution.js` und pushe die Änderungen in deine Repo.
- Du darfst online recherchieren, aber schreibe deinen eigenen Code - verwende keine KI.
- Du darfst keine Hilfe von Klassenkameraden oder Lehrern erhalten, um die Aufgaben zu erledigen.
- Du darfst den Lehrer oder den Assistenzlehrer bitten, eine Aufgabe zu klären (im Rahmen des Zumutbaren).
- Befolge die folgenden Anweisungen, um den Test abzuschließen. **Wichtig**: Achte darauf, dass die Namen deiner Variablen/Funktionen mit den Namen in den folgenden Anweisungen übereinstimmen.
- Alle deine Funktionen sollten einen Wert zurückgeben.
- Viel Erfolg!

## Aufgabe 1 - Beginnt mit Los oder New?

Erstelle eine Funktion mit dem Namen `startsWithLosOrNew`. 

Die Funktion nimmt einen String als Eingabe und gibt zurück:

- `true`: wenn der String mit `"Los"` oder `"New"` beginnt
- `false`: in allen anderen Fällen
 
Die Funktion sollte **Groß- und Kleinschreibung** ignorieren.

Zum Beispiel:

```javascript
startsWithLosOrNew("New York"); // true
startsWithLosOrNew("newark"); // true
startsWithLosOrNew("London"); // false
startsWithLosOrNew("Los Angeles"); // true
startsWithLosOrNew("lOs Angeles"); // true
startsWithLosOrNew("San Carlos"); // false
```

## Aufgabe 2 - Ist teilbar durch 100?

Erstelle eine Funktion mit dem Namen `isDivisibleBy100`. 

Die Funktion nimmt eine ganze Zahl als Eingabe und gibt zurück: 

- `true`: wenn die ganze Zahl durch 100 teilbar ist
- `false`: wenn die ganze Zahl **nicht** durch 100 teilbar ist

Zum Beispiel:

```javascript
isDivisibleBy100(1); // false
isDivisibleBy100(1000); // true
isDivisibleBy100(100); // true
```

## Aufgabe 3 - Wie ist das Wetter?

Verwende einen **Ternary Operator**, um diese Aufgabe zu lösen. Erstelle eine Funktion mit dem Namen `isRaining`.Wenn `true` übergeben wird, gibt sie `"wet day - you need an umbrella"` zurück. Wenn `false` übergeben wird, gibt sie `"dry day - leave your umbrella at home"` zurück.

Zum Beispiel:

```javascript
isRaining(true); // 'wet day - you need an umbrella'
```

## Aufgabe 4 - Du hast die Macht

Erstelle eine Funktion mit dem Namen `powerOf`.

Die Funktion nimmt eine ganze Zahl als Eingabe und gibt die Zahl zur Potenz von sich selbst zurück.

Zum Beispiel:

```javascript
// 2 als Potenz von 2; 2 hoch 2
powerOf(2); // 4 

// 3 hoch 3
powerOf(3); // 27

// 4 hoch 4
powerOf(4); // 256

// 5 hoch 5
powerOf(5); // 3125
```

## Aufgabe 5 - Bereich 

Erstelle eine Funktion mit dem Namen `range`.

Die Funktion nimmt 2 Zahlen als Eingabe:

- `start`
- `end`
 
Sie gibt ein Array zurück, das eine Liste von Zahlen enthält, die von `start` bis `end` gehen.

Zum Beispiel:

```javascript
range(5, 10); // [ 5, 6, 7, 8, 9, 10 ]
range(10, 16); // [ 10, 11, 12, 13, 14, 15, 16 ]
range(1, 6); // [ 1, 2, 3, 4, 5, 6 ]
range(0, 3); // [ 0, 1, 2, 3 ]
```
