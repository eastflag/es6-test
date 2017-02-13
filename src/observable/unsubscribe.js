"use strict";
var Observable_1 = require("rxjs/Observable");
var stream1$ = new Observable_1.Observable(function (observer) {
    var timeout = setTimeout(function () {
        observer.next('observable timeout');
    }, 2000);
    return function () {
        clearTimeout(timeout);
    };
});
var disposable = stream1$.subscribe(function (value) { return console.log(value); });
setTimeout(function () {
    disposable.unsubscribe();
}, 1000);
//# sourceMappingURL=unsubscribe.js.map