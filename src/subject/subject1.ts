import * as Rx from "rxjs/Subject";

var subject = new Rx.Subject();
var subscription = subject.subscribe(
    x => console.log('next: ' + x),
    e => console.log('error: ' + e.message),
    () => console.log('completed')
);
subject.next(1); // => next: 1
subject.next(2); // => next: 2
subject.complete(); // => completed
subscription.unsubscribe();
