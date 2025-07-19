/**
 * @param {number} n
 * @return {Function} counter
 */

/**Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). **/

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


/** Hint 1
 * In JavaScript, a function can return a closure. A closure is defined as a function and the variables declared around it (it's lexical environment).
 **/

/** Hint 2
 * A count variable can be initialized in the outer function and mutated in the inner function.
 **/