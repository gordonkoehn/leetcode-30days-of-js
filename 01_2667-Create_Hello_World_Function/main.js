/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    function helloWorld() {
        return "Hello World";
    }

    return helloWorld;
};


 const f = createHelloWorld();
 f(); // "Hello World"
