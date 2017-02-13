import {Observable} from "rxjs/Observable";

let stream1$ = new Observable(observer => {
    let timeout = setTimeout(()=> {
        observer.next('observable timeout');
    }, 2000);

    return () => {
        clearTimeout(timeout);
    }
});

let disposable = stream1$.subscribe(value => console.log(value));
setTimeout(()=>{
    disposable.unsubscribe();
}, 1000);
