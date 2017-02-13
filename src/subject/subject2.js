"use strict";
// Every second
var Rx = require("rxjs");
var source = Rx.Observable.interval(1000);
var subject = new Rx.Subject();
var subSource = source.subscribe(subject);
var subSubject1 = subject.subscribe(function (x) { return console.log('Value published to observer #1: ' + x); }, function (e) { return console.log('onError: ' + e.message); }, function () { return console.log('onCompleted'); });
var subSubject2 = subject.subscribe(function (x) { return console.log('Value published to observer #2: ' + x); }, function (e) { return console.log('onError: ' + e.message); }, function () { return console.log('onCompleted'); });
setTimeout(function () {
    subject.complete();
    subSubject1.unsubscribe();
    subSubject2.unsubscribe();
}, 5000);
//# sourceMappingURL=subject2.js.map