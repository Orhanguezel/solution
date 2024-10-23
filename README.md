
# JavaScript Solutions - Task Descriptions

## Task 1 - Starts with Los or New?

Create a function named `startsWithLosOrNew`. 

The function takes a string in input and returns:

- `true`: if the string starts with `"Los"` or `"New"`
- `false`: in every other case
 
The function must be **case insensitive**.

### Solution:

```javascript
function startsWithLosOrNew(cityName) {
    const strCityName = cityName.toLowerCase();
    return strCityName.slice(0, 3) === 'los' || strCityName.slice(0, 3) === 'new';
}
```

### Examples:

```javascript
console.log(startsWithLosOrNew("New York")); // true
console.log(startsWithLosOrNew("Los Angeles")); // true
console.log(startsWithLosOrNew("Boston")); // false
console.log(startsWithLosOrNew("San Francisco")); // false
console.log(startsWithLosOrNew("newark")); // true
console.log(startsWithLosOrNew("los")); // true
console.log(startsWithLosOrNew("new")); // true
```

---

## Task 2 - isDivisibleBy100?

Create a function named `isDivisibleBy100`. 

The function takes an integer in input and returns:

- `true`: if the integer is divisible by 100
- `false`: if the integer is **not** divisible by 100

### Solution:

```javascript
function isDivisibleBy100(num) {
   return num % 100 === 0;
}
```

### Examples:

```javascript
console.log(isDivisibleBy100(1)); // false
console.log(isDivisibleBy100(1000)); // true
console.log(isDivisibleBy100(100)); // true
```

---

## Task 3 - What's the weather?

Use a **ternary operator** to complete this task. Create a function named `isRaining`. If passed `true`, return `"wet day - you need an umbrella"`. If passed `false`, return `"dry day - leave your umbrella at home"`.

### Solution:

```javascript
function isRaining(trueOrFalse) {
   return trueOrFalse ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}
```

### Examples:

```javascript
console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false)); // 'dry day - leave your umbrella at home'
```

---

## Task 4 - You've got the power

Create a function named `powerOf`.

The function takes an integer in input and returns the integer to the power of itself.

### Solution:

```javascript
function powerOf(num) {
    return Math.pow(num, num);
}
```

### Examples:

```javascript
console.log(powerOf(2)); // 4 
console.log(powerOf(3)); // 27
console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125
```

---

## Task 5 - Range 

Create a function named `range`.

The function takes 2 numbers in input:

- `start`
- `end`
 
It returns an array containing a list of numbers that go from `start` to `end`.

### Solution:

```javascript
function range(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
```

### Examples:

```javascript
console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ]
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(range(0, 3)); // [ 0, 1, 2, 3 ]
```
```
