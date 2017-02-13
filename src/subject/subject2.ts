// Every second
import * as Rx from "rxjs";

var source = Rx.Observable.interval(1000);
var subject = new Rx.Subject();
var subSource = source.subscribe(subject);
var subSubject1 = subject.subscribe(
    x => console.log('Value published to observer #1: ' + x),
    e => console.log('onError: ' + e.message),
    () => console.log('onCompleted'));
var subSubject2 = subject.subscribe(
    x => console.log('Value published to observer #2: ' + x),
    e => console.log('onError: ' + e.message),
    () => console.log('onCompleted'));
setTimeout(() => { //Clean up
    subject.complete();
    subSubject1.unsubscribe();
    subSubject2.unsubscribe();
}, 5000);