
# Programming Basics - Exam 1 Solutions

### Task 1 - Starts with Los or New?

This function checks whether a city name starts with "Los" or "New", case insensitive. It returns `true` if it does, otherwise it returns `false`.

```javascript
function startsWithLosOrNew(cityName){
    let strCityName = cityName.toLowerCase();
    
    if (strCityName.length < 3) {
        return false;
    }
    
    let kntrl = "";

    for (let i=0; i<3; i++){
        kntrl+=strCityName[i];
    }
    
    return (kntrl === "los" || kntrl === "new") ? true : false;
}

console.log(startsWithLosOrNew("New York")); // true
console.log(startsWithLosOrNew("Los Angeles")); // true
console.log(startsWithLosOrNew("Boston")); // false
console.log(startsWithLosOrNew("San Francisco")); // false
console.log(startsWithLosOrNew("newark")); // true
console.log(startsWithLosOrNew("los")); // true
console.log(startsWithLosOrNew("new")); // true
```

### Task 2 - isDivisibleBy100?

This function checks if a number is divisible by 100. It returns `true` if divisible, otherwise it returns `false`.

```javascript
function isDivisibleBy100(num){
    return num % 100 === 0;
}

console.log(isDivisibleBy100(1)); // false
console.log(isDivisibleBy100(1000)); // true
console.log(isDivisibleBy100(100)); // true
```

### Task 3 - What's the weather?

This function checks if it's raining using a ternary operator. It returns `"wet day - you need an umbrella"` if it’s raining, otherwise `"dry day - leave your umbrella at home"`.

```javascript
function isRaining(trueOrFalse){
   return trueOrFalse ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false)); // 'dry day - leave your umbrella at home'
```

### Task 4 - You've got the power

This function returns a number raised to the power of itself.

```javascript
function powerOf(num){
    return Math.pow(num, num);
}

console.log(powerOf(2)); // 4
console.log(powerOf(3)); // 27
console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125
```

### Task 5 - Range

This function returns an array of numbers starting from `start` and ending at `end` inclusively.

```javascript
function range(start, end){
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ]
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(range(0, 3)); // [ 0, 1, 2, 3 ]
```

---