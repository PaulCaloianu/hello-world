// Declare an anonymous function
(function () {
    var foo = 42;
    console.log(window.foo);
    // → undefined
    console.log(foo);
    // → 42
})();
//^ and call it immediately