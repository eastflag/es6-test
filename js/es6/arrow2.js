// arrow 펑션과 lexical function
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
/*function Person() {
    // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
    this.age = 0;

    setInterval(function growUp() {
        // 비엄격 모드에서, growUp() 함수는 `this`를
        // 전역 객체로 정의하고, 이는 Person() 생성자에
        // 정의된 `this`와 다름.
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();*/

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 는 정확히 person 객체를 참조
        console.log(this.age);
    }, 1000);
}

var p = new Person();