// the global context is always at the bottom of the stack, 
// it is created prior execution of any other context.


function *gen() {  // generator function
    yield 1; // just gen a value but not return (abstract)
    // Actually -> When a function is called, 
    // a new execution context is created, and pushed onto the stack 
    // When a function returns, its context is popped from the stack.
    // The yield statement here returns the value to the caller, and pops the context. 
    // On the second next call, the same context is pushed again onto the stack
    // until function return, the context will be deleted

    return 2;
}

let g = gen(); // Object

console.log(
    gen.prototype,   // Object [Generator] {}
    g.prototype,     // undefined -> a object has no prototype (only __proto__)
    gen.__proto__,   // Function [Generator] {}
    gen.__proto__.prototype,   // Object [Generator] {}
    gen().__proto__.__proto__, // Object [Generator] {}
    gen().__proto__.__proto__.__proto__, // Object [Generator] {}
    gen().__proto__.__proto__.__proto__.__proto__, // Object [null prototype] {}
    gen().__proto__.__proto__.__proto__.__proto__.__proto__, // null
    g.__proto__,     // Object [Generator] {}
    g.next().value,
    g.next().value,
);
