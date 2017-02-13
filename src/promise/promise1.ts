/**
 * Created by eastflag on 2017-02-02.
 */
let promise = new Promise(resolve => {
    setTimeout(()=>{
        resolve('success');
    }, 2000);
});

promise.then(value=>{
   console.log(value);
});
