/**
 * Created by eastflag on 2016-10-14.
 */
// array list 생성
var books = [
    {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
    {title: "흥부놀부", price: 25000, author: "미상", order: 2},
    {title: "자바의정석", price: 35000, author: "정석", order: 3},
    {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

//type은 무엇인가? object, 자바스크립트의 타입은 몇가지가 있는가?
console.log(typeof books);

console.log('pop, push, shift, unfhift 테스트 ----------------------------------------------------------');
//맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오
books.unshift({title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
//맨 앞쪽에 추가한것을 지우시오,
books.shift();
console.log(books);
// 맨 뒷쪽에 추가하시오.
books.push({title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
//맨 뒤쪽에 추가한것을 지우시오,
books.pop();
console.log(books);

console.log('splice function-------------------------------------------------------------------');
//흥부놀부와 자바의정석 사이에 삽입
books.splice(2, 0, {title: "이것이자바다", price: 40000, author: "김상형", order: 5});
console.log(books);
//방금 삽입한거 지우기
books.splice(2, 1);
console.log(books);

console.log('forEach function-------------------------------------------------------------------');
// 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오
books.forEach(function(item) {
    if(item.title === '자바의정석') {
        item.author = '남궁성';
    }
});
console.log(books);

//책의 총 비용을 출력하시오
console.log('forEach 와 map의 차이점: map은 새로운 배열을 리턴한다.-----------------------------------------------');
var sum = 0;
books.forEach(function (item) {
  sum += item.price;
});
console.log('forEach sum:' + sum);

console.log('map function-------------------------------------------------------------------');
//새로운 배열을 만들되 판매순위가 3등안에 드는 경우에 제목앞에 등수를 붙인다.
//print) 콩쥐팥쥐 흥부놀부 자바의정석
var newMap = books.map(function (item) {
    if(item.order <= 3) {
        item.title = item.order + '등 ' + item.title;
        return item;
    } else {
        return item;
    }
});
console.log(newMap);

console.log('filter function-------------------------------------------------------------------');
//새로운 배열을 만들되 3등안에 있는것만 따로 만든다.
var newFilter = books.filter(function (item) {
    if(item.order <= 3) {
        return true;
    }
});
console.log(newFilter);



/*var a = fruits.pop();
console.log(a);
//Mango
fruits.push("Kiwi");
console.log(fruits); //
// [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

//shift, unshift test
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var b = fruits.shift();
console.log(b);
//Banana
fruits.unshift("Kiwi");
console.log(fruits);
//[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

//splice test
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
//2번 인덱스에 1개(Apple)를 지우고 Lemon,과 Kiwi를 삽입한다.
console.log(fruits);
//[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2);
//1번 인덱스에 2개(Orange, Apple)를 지운다.
console.log(fruits);
//[ 'Banana', 'Mango' ]

//map test : 배열의 모든 요소에 fullname property를 추가하고 싶다.
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
persons.map(function (item, index) {
    item.fullname = item.firstname + " " + item.lastname;
});
console.log(persons);*/
/*[ { firstname: 'Malcom',
 lastname: 'Reynolds',
 fullname: 'Malcom Reynolds' },
 { firstname: 'Kaylee',
 lastname: 'Frye',
 fullname: 'Kaylee Frye' },
 { firstname: 'Jayne', lastname: 'Cobb', fullname: 'Jayne Cobb' } ]*/