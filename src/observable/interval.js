"use strict";
var rxjs_1 = require("rxjs");
var stream1$ = new rxjs_1.Observable(function (observer) {
    var count = 0;
    var timeout = setInterval(function () {
        ++count;
        observer.next(count);
    }, 1000);
    return function () {
        clearTimeout(timeout);
    };
});
var disposable = stream1$.subscribe(function (value) { return console.log(value); });
setTimeout(function () { return disposable.unsubscribe(); }, 5000);
//# sourceMappingURL=interval.js.map