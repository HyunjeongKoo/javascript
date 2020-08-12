"use strict";

//string(문자열): '' or "" 묶어서 

let heykk = 'hey';
let youkk = "you";
console.log('뀨까뀨');

//유용한 단축키들
/*
code 이동 : alt + 방향키
code 복사 : ctrt + c
code 한줄 삭제 : ctrl + shift + k
*/

//변수
/*
 변수 : 변할 수 있는 수 (상황, 값)
 프로그램 진행 중 발생하는 데이터의 임시저장
 중복값 제어

    데이터를 담는 그릇
    데이터는 수정가능 

    1. 변수만들기
    키워드(상자) 변수명(상자이름);

    2. 값 넣기
    변수명 = (넣을 값);

    3. data type
    number, string, boolean, null, undefined
     object, function
*/

//number(숫자)

var a = 1;
var b = 2;
var c = 1.5;

console.log(a+b);
console.log(a);
console.log(b);
console.log(c);
console.log(typeof c); "이거슨 type을 알려주는겨"
console.log('-------------------------');


    //let, const(상수, 값 재할당 불가)
//var 안쓰고 얘로 (var와 같은놈이라 볼 수 있음)
let age; //변수를 선언해야 가능
age = 30;
console.log(age);
age = 50;
console.log(age);

//{
    const days = 40;
    console.log(days);
//}
//console.log(days); //=> 중괄호 안에 내역을 찾을 수 없음 

 //var 왜 쓰면 안되는지
    //1. global scope (hoisting)
        //hoisting이란, 전역변수
        //전역변수로 선언한 꼴

let whyDontUse;
whyDontUse = 7777777777777; //var은 변수를 미리 선언 안해도 됨
console.log(whyDontUse);

    //2. 블록 무시 (ignore the block)

{
    let whydontuse2 = 1111;
console.log(whydontuse2);
}
console.log(whydontuse2);

/*
 주의사항
    변수명 자유롭되 몇가지 제한사항
js문법 x (예약어), 숫자로 시작 x,
소문자로 시작 가능
약속 : 띄어쓰기 대신 낙타체(첫 글자를 대문자로!) 또는 _ 사용
약속 : 모든 글자를 대문자로 써서 상수표현!
*/

console.log('----------------');

let myAge;
myAge = 27;
let myHeight;
myHeight = 174;
console.log('내 나이는 ' + myAge + '세 입니다');
console.log('내 키는 ' + myHeight + 'cm 입니다');