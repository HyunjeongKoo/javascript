"use strict";


/* 
대입연산자 : = <- 같다는 뜻이 아니다!!>
오른쪽 것을 왼쪽에 담았다, 넣었다.  

같다 ==or====
*/ 
let a = 1;
let b = "1";

let c = a + b;
console.log(a);
console.log(b);
console.log(c);

console.log(typeof c);
console.log(a+b); //num +str = str
console.log(a / b); // num / str = number!!!!  
let temp = a/b;
console.log(typeof temp); 
// 숫자 + 문자열 = string. 
// 숫자 / 문자열 = number. 

console.log(a == b); //true
console.log(a === b); //false 

console.log('---------------1');

/* 산술연산자 : + - * / %
*/

let x = 5;
let y = 2;

let add = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;

let remain = x % y;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

console.log(remain); //x/y 해서 나오는 나머지 값 

console.log('------------------2');

/*
복합연산자 : +=, -=, *=, /=, %=  
*/
x = 5;
x = x + 1
console.log(x);

x += 1; // x = x + 1 
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 5;
console.log(x);
x %= 2;
console.log(x);

console.log('-------------3');

//전위 후위 연산자 ++, --. 1씩 증감 
//2씩 증감하려면 x += 2; 

x += 1;
console.log(x);

x++;  //+1
console.log(x);

++x; 
console.log(x);

--x;  //-1
console.log(x);

console.log('--------------');

//요부분 잘 쓰게 될 것
let x2 = 1; 
let y2 = x2++; //먼저 1담고 넘겨주고 나서 자기자신을 2로 바꿈

console.log(x2); //2 
console.log(y2); //1 

let x3 = 1;
let y3 = ++x3; //기준이 변수까지. 자신을 2로 만들고, 넘겨줌

console.log(x3); //2
console.log(y3); //2




