"use strict";

//함수: 어떤 기능을 정리한 것 (필요할때 쓸려고)
//재사용 가능(재사용 위해)

//function call  사용자 정의 함수

//2단 출력

function print2dan() {
  for (let j = 0; j <= 9; j++) {
    console.log(`2 X ${j} = ${2 * j}`);
  }
}

function print3dan() {
  for (let j = 0; j <= 9; j++) {
    console.log(`3 X ${j} = ${3 * j}`);
  }
}

//파라메터가 없는 함수
function add(a, b) {
  console.log(a + b);
}

//위에 값 2개 넘겨받아서 (호출 때 입력)

//해당하는 구구단 (호출 때 2)
//클릭하면 콘솔에.

function printgugu(b) {
  for (let a = 1; a <= 9; a++) {
    console.log(`${b} x ${a} = ${b * a}`);
  }
}

//https // ip : 80 이라고 하면 생략해도 작동  / index.html?
// %2AR$

/*function printkuku(params) 
  document.f.inputkkkk
{    for(let j = 1; j<=9, j++)
     console.log('${n} x ${j} = ${n * j}')
}
*/

function printgugu2() {
  let mybox = document.f.inputkkkk; //input box
  let myvalue = mybox.value; // box안의 값

  for (let j = 1; j <= 9; j++) {
    console.log(`${myValue} x ${j} = ${myValue * j}`);
  }
  mybox.value = "";
  return false;
}


//getelementbyid / queryselector / 