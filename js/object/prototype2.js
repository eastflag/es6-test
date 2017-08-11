// proto type 개념 이해
// # 1.
var A = function () {
    this.x = function () {
        console.log('hello');
    };
};
A.x=function() {
    console.log('world');
};
var a = new A();
console.log(a.x()); //hello
console.log(a);

// # 2.
var B = function () { };
B.x = function() {
    console.log('hello');
};
B.prototype.x = function () {
    console.log('world');
};
var b = new B();
console.log(b.x());
