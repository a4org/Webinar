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

var j = 10;

console.log(point.__proto__); // [object null prototype] {}
console.log(point.prototype); // undefined
console.log(point3D.x); // 10
console.log(point3D.valueOf()); // {z: 30}
console.log(point3D.__proto__.valueOf()); // {x: 10, y: 20}
console.log(j.__proto__); // {}
console.log(j.__proto__.__proto__); // [object null prototype] {}
console.log(point3D.y.valueOf()); // 20
console.log(point3D.y); // 20
console.log(point3D.z); // 30
console.log(point3D.__proto__); // {x: 10, y:20}
console.log(point3D.toString); // [Function: toString]
console.log(point3D.__proto__.toString); // [Function: toString]
console.log(point3D.prototype); // undefined
// "let" normal object do not have prototype (undefined)

console.log('t');
console.log(point3D.__proto__.__proto__.prototype); // [object null prototype] {}
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
  Letter.prototype, // {getNumber: [Function (anonymous)]} // for inherience
  Letter.__proto__, // {}
  Letter.__proto__.__proto__, // [object null prototype] {}
  console.log('t'),
  a.getNumber(), // 1
  b.getNumber(), // 2
  z.getNumber(), // 26
);


class Letter2 {
  constructor(number) {
    this.number = number;
  }
 
  getNumber() {
    return this.number;
  }
}
 
let c = new Letter2(1);
let e = new Letter2(2);
// ...
let l = new Letter2(26);
 
console.log(
  Letter2.prototype, // {}
  Letter2.prototype.__proto__, // [Object null prototype] {}
  Letter2.__proto__, // {}
  c.__proto__.__proto__,   // {}  // Letter2.
  c.getNumber(), // 1
  e.getNumber(), // 2
  l.getNumber(), // 26
);
