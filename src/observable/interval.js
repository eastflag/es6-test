import {Observable} from "rxjs";

let stream1$ = new Observable(observer => {
    let count = 0;
    let timeout = setInterval(() => {
        ++count;
        observer.next(count);
    }, 1000);

    return () => {
        clearTimeout(timeout);
    }
});

let disposable =stream1$.subscribe(value => console.log(value));
setTimeout(()=>disposable.unsubscribe(), 5000);
