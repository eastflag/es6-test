"use strict";
var Rx = require("rxjs/Subject");
var subject = new Rx.Subject();
var subscription = subject.subscribe(function (x) { return console.log('next: ' + x); }, function (e) { return console.log('error: ' + e.message); }, function () { return console.log('completed'); });
subject.next(1); // => next: 1
subject.next(2); // => next: 2
subject.complete(); // => completed
subscription.unsubscribe();
//# sourceMappingURL=subject1.js.map