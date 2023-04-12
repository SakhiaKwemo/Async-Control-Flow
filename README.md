# Lighthouse Labs | Async Control Flow 

* [x] High Order Functions/Callbacks (Review)
* [x] Sync vs Async 
* [x] SetTimeout
* [x] SetInterval

* [x] BREAK........

* [x] FileReadSync/FileWriteSync vs FileRead/FileWrite
* [x] Events in JS
* [x] BONUS

# High Order Functions 
<!-- - Functions that use other functions within it -->
- Function that either
1. Accepts a function as a parameter
2. Returns a function

# Callbacks
- Function that is passed as a parameter inside of another function


```js

/* Is HOF a High Order Function?*/

/* is add a callback function?*/

const add5 = (num1) => {
    return num1 + 5
}
const HOF = () => {
    return add5(6)
}


```

