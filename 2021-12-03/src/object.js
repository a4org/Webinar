// Base Project
let point = {
    x : 10,
    y : 20,
};

// Inherit from 'point' object
let point3D = {
    z : 30,
    __proto__: point,
};

console.log(point.__proto__); // [object null prototype] {}
console.log(point.prototype); // undefined
console.log(point3D.x); // 10
console.log(point3D.y); // 20
console.log(point3D.z); // 30
console.log(point3D.__proto__); // {x: 10, y:20}
console.log(point3D.toString); // [Function: toString]
console.log(point3D.__proto__.toString); // [Function: toString]
console.log(point3D.prototype); // undefined
console.log(point3D.__proto__.__proto__); // [object null prototype] {}
console.log(point3D.__proto__.__proto__.__proto__); // null



// Object create
console.log(Object.__proto__); // {}
// Inheritance
console.log(Object.prototype); // [object null prototype] {} 
console.log(Object.__proto__.__proto__);  // [object null prototype] {}

let dict = Object.create(null);
console.log(dict.__proto__); // undefined

console.log('test');

function Letter(number) {
  this.number = number;
}
 
Letter.prototype.getNumber = function() {
  return this.number;
};
 
let a = new Letter(1);
let b = new Letter(2);
// ...
let z = new Letter(26);
 
console.log(
  Letter.prototype, // {getNumber: [Function (anonymous)]}
  Letter.__proto__, // {}
  Letter.__proto__.__proto__, // [object null prototype]
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber(), // 26
);
