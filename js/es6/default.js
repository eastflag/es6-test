function myFunction(x = 1, y = 2, z = 3 + 5) {
    console.log(x, y, z);
}

myFunction(6);
myFunction(6,7);
//3번째 파라메터 z로 넘기는 방법
myFunction(undefined, undefined, 1);