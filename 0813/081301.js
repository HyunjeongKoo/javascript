"use strict";

/*
let a = 0;
while (true) {
  console.log(a);
  a++;
  if (a > 3) {
    break; //반복문 탈출할때 ()
  }
}

for (let a = 0; ; ) {} //for(;;) = true
console.log(a);
a++;
if (a > 3) {
  break;
}
*/

//그럼 무한루프 어떻게 빠져나가는가...
console.log("---------------------------------------");

//위기 2중 for 문
for (let dan = 2; dan <= 9; dan++) {
  console.log(dan + "단-----------------------");
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

console.log("---------------------------------------");

for (let j = 0; j <= 9; j++) {
  console.log(`2 X ${j} = ${2 * j}`);
}

// 3* 홀수만 출력

for (let j = 1; j <= 9; j += 2) {
  console.log(`3 X ${j} = ${3 * j}`);
}

/*
ㅋ
ㅋㅋ
ㅋㅋㅋ
ㅋㅋㅋㅋ
ㅋㅋㅋㅋㅋ
*/

//function call(){
//document.write('')
//

/*for (let lol = 1; lol <= 5; lol++) {
  for (let lol2 = 1; lol2 <= 1; lol2++) {
    console.log(`${lol * 1}`);
  }
}
*/

/*function call() {
  document.write(ㅋ);
}
*/

//console.log -> document.write('<br>');
//function call() {
//    document.write('이름 : ' + myname + '<br>나이 : ' + myage);

function call() {
  for (let i = 1; i <= 10; i++) {
    if (i <= 5)
      for (let i2 = 1; i2 <= i; i2++) {
        document.write("Koo");
      }
    document.write("<br>");
  }
 else(
     for(let j = 1, j <= 11-i ; j++){
    console.log() document.write("Koo");
     }

 )
}

