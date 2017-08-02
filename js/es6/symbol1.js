/**
 * Created by eastflag on 2017-08-01.
 */
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2);
console.log(Symbol.toString());

var obj = {};
var a = Symbol("a")

obj[a] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
    console.log(i); // logs "c" and "d"
}

console.log(obj[a]); //logs "a"