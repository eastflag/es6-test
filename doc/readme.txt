* 설정
npm install --save-dev babel-cli babel-preset-es2015
file watch 설정
https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/

* 관련자료
- angular2에서 RxJS와 Observable
https://www.youtube.com/watch?v=ZmEvKLYF0os&t=4s


* es6 키워드가 어떤 브라우저에서 지원하는지 알아보기
http://caniuse.com

* 브라우저에서 실행하기
npm install -D http-server
index.html에 링크걸기
npm run es6
{
es6: ''
}

* ts 컴파일하기
한개
tsc hello-world.ts
자동화
settings -> typescript에 compiler 체크, tsconfig.json 추가
