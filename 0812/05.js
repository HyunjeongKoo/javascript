"use strict";

/*논리연산자: 결과로 boolean 나오는 것 (참,거짓)
>(초과), <(미만), >=(이상) <=(이하) ==(같다) !=(다르다)
*/

let x = 10;
let y = 20;

console.log(x > y);
//숫자 타입: 넘버, 문자타입 : 스트링 

/*
결합연산자 : 논리연산자 여러개 묶을 때 

&&(and) : A && B : A랑 B랑 모두 만족하면 TRUE;
//(or) : A // B : A나 B를 만족하면 TRUE
\(BACKSPACE 밑에 SHITF키 누르고 (특수문자 쓰듯이)

*/
// x = 10, y = 20
//X가 5보다 크고 , Y가 10보다 작나 
let a = x > 5 && y < 10;
console.log(a);

//x가 5보다 크거나, y가 10보다 작나 
let a2 = x > 5 || y < 10;
console.log(a2);

console.log('-------------------------------------1');

//놀이동산 
//놀이기구 타도 되는지 안되는지 체크 

//키, 나이 
let height = 180;
let age = 30;

//나이가 10살 이상이고, 키가 200넘으면 타도 됨 
//let b = age >= 10 && height > 200;
let b = height >200 && age >= 10; 
//확률이 낮은것을 앞으로 배치하면 연산횟수를 줄일 수 있음
console.log(b);

//키 200넘거나, 나이가 10살이상이면 타도 됨 
//let b2 = age >= 10 || height > 200; 
let b2 = height > 200 || age >= 10; 
//확률이 높은 것은 앞으로 배치하면 연산 횟수를 줄일 수 있음 
console.log(b2);

//키가 200넘으면 타면 안됨. 
//서장훈 방문

height = 210;
let ok = !(height > 200); //키가 200미만이면 타도 됨 
console.log(ok)
// a != null   a가 null이 아니면  

console.log('---------------------------------2');

/*
삼항 연산자 
조건식? true 값 : false 값 

*/
age = 20;
//나이가 10살이 넘으면, welcome 아니면 go home

let msg = (age > 10) ? 'Welcome' : 'go home';
console.log(msg);

//test 
age = 30;
height = 180;


//입장료 
//키가 200 넘거나 20이상이면 10000원, 아니면 5000원 
let msg2 = (height > 200) || (age >= 20) ? 10000 : 5000;;
console.log(msg2);

//할인 
//나이가 짝수면 2000원, 아니면 500원 할인 
let msg3 = ( age % 2 == 0 ) ? msg2-2000 : msg2-500;
console.log(msg3 + "원");

//총요금 

console.log('----------------------------------------3');

/*
equality. 같다
*/

let stringNum = "10";
let numberNum = 10; 

//== (타입 안따짐)
console.log(stringNum == numberNum); //t (이걸 표준으로 생각할 것)
console.log(stringNum != numberNum); //f

//=== (타입 까지 따짐)
console.log(stringNum === numberNum); //f ?? 요부분 다ㅣㅅ 
console.log(stringNum !== numberNum) //t 맞지 않은 말이 맞으니까 트루

console.log('--------------------------obj-----------------------')

let me1 = {name : 'Ms.Koo', age : 28};
let me2 = {name : 'Ms.Koo', age : 28}; //me1과 me2는 같은 사람인가
let me3 = me1;

console.log(me1 == me2);
console.log(me1 === me2);
console.log(me1 == me3); //번지수가 같으니까 

//0, null, empty string ''

console.log(0 == false); //t
console.log(0 === false); //f

console.log('' == false); //t
console.log('' === false); //f

console.log(null == undefined); //t
console.log(null === undefined); //f


