//ES5 이전
var x = {x: 12};
var y = Object.create(x, {y: {value: 13}});
console.log(y.x);
console.log(y.y);

//ES6 이후
let a = {a: 12, __proto__: {b: 13}};
console.log(a.a);
console.log(a.b);