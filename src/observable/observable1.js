"use strict";
var Observable_1 = require("rxjs/Observable");
var stream1$ = new Observable_1.Observable(function (observer) {
    setTimeout(function () {
        observer.next('observable timeout');
    }, 2000);
});
stream1$.subscribe(function (value) { return console.log(value); });
//# sourceMappingURL=observable1.js.map