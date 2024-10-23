// Create your solutions here

// task-1

function startsWithLosOrNew(cityName){
    let strCityName = cityName.toLowerCase();
    
    if (strCityName.length < 3) {
        return false;
    }
    
    let kntrl = "";

    for ( let i=0; i<3; i++){
        kntrl+=strCityName[i];
    }
        if( kntrl === "los" || kntrl === "new"){
            return true;
        } return false;
    } 
   

console.log(startsWithLosOrNew("New York"));
console.log(startsWithLosOrNew("Los Angeles"));
console.log(startsWithLosOrNew("Boston"));
console.log(startsWithLosOrNew("San Francisco"));
console.log(startsWithLosOrNew("newark"));
console.log(startsWithLosOrNew("los"));
console.log(startsWithLosOrNew("new"));

// task-2
function isDivisibleBy100(num){
    if(num % 100 === 0){
        return true;
    } return false;

}

console.log(isDivisibleBy100(1));
console.log(isDivisibleBy100(1000));
console.log(isDivisibleBy100(100));

// task-3

function isRaining(trueOrFalse){
   return (trueOrFalse === true) ?  "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

console.log(isRaining(true));
console.log(isRaining(false));

// task-4

function powerOf(num){
    return Math.pow(num,num);

}

console.log(powerOf(2));
console.log(powerOf(3));
console.log(powerOf(4));
console.log(powerOf(5));

// task-5

function range(start, end){
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(5, 10));
console.log(range(10, 16));
console.log(range(1, 6));
console.log(range(0, 3));