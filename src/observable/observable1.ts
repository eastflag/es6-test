import {Observable} from "rxjs/Observable";

let stream1$ = new Observable(observer => {
    setTimeout(()=> {
        observer.next('observable timeout');
    }, 2000);
});

stream1$.subscribe(value => console.log(value));