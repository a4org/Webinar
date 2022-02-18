let x = 10;

// In JS, Functions are first-class
// a function which can participate as a normal data: 
// be stored in a variable, passed as an argument, or returned as a value from another function.

function foo() {
    console.log(x);
}

function bar(funcArg) {
    let x = 20;
    funcArg(); // 10
}


bar(foo); // 10

// Slove Funarg Problem (free variable)
// Closure
// a function which captures the environment where it’s defined.

function foo2() {
    let y = 10;

    // Closure, captring environment of `foo`
    function bar2() {
	return y;
    }

    return bar2;
}

let y = 20;

let bar2 = foo2();

console.log(bar2());  // 10

// let vs var
// let -> block scope
// var -> function scope

tvar();


function tvar() {
    console.log(i); // undefined
    var i = 10;
    console.log(i); // 10
}


function tlet() {

}
