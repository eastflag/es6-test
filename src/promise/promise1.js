/**
 * Created by eastflag on 2017-02-02.
 */
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('success');
    }, 2000);
});
promise.then(function (value) {
    console.log(value);
});
//# sourceMappingURL=promise1.js.map