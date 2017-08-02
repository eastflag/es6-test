var object1 = {
    f1: () => {
        console.log(this);
        var f2 = () => { console.log(this); }
        f2();
        setTimeout(f2, 1000);
    }
};
object1.f1();

var object2 = {
    f1: function () {
        console.log(this);
        var f2 = () => { console.log(this); }
        f2();
        setTimeout(f2, 1000);
    }
};
object2.f1();