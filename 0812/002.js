"use strict";

if(true){
 console.log('true');

}

if(false){
console.log('false'); //죽은코드로 나옴 
}

//다중 if문 :if문 여러개 쓴 거(참인것 다 실행)

let a = 12; 

if(a % 2 ==0) {
    console.log(a+"는 짞수다");
    console.log(a+"는 2배수다");
}

if(a % 3 == 0){
    console.log(a+"(은)는 3배수다");
}

if(a % 4 == 0){
    console.log(a + "는 4배수다");
}

console.log('--------------------------------------1');

//if, elseif (여러 옵션 중 하나만)

/*
1. 키가 150 이상이면 Welcome
2. 130 <= 150 이면 Welcome friend 
3. 100 <= 130 이면 Welcom boy 
4. 나머지는? 

*/

let tall = 130; 

if(tall >= 150){
    console.log('welcome');
} else {
    if(tall >= 130) {
        console.log('welcome friend');       
    } else {
        if (tall >= 100) {
            console.log('welcome boy');
        } else{
            console.log('??');
        }
    }
}
//근데 이렇게 쓰면 너무 지저분 

if(tall >= 150){
    console.log('welcome');
} else if(tall >= 130){
    console.log('welcome friend');
} else if(tall >=100){
        console.log('Welcome boy');
    } else{
        console.log('??');
}

/*
1. x는 5배수 
2. x는 2배수 
3. x는 4배수 
나머지: 5,2,4 배수 해당 없음 
*/

let x = 10;

if(x % 5 == 0){
    console.log(x + "는 5의 배수");
}  if(x % 2 ==0){
    console.log(x + "는 2의 배수");
}  if(x % 4 ==0){
    console.log(x + "는 4의 배수");
} else 
    console.log(x + "는 4의 배수 해당 없음");


console.log('-----------------------------2');


let b = 10;
if(b%2 ==0){
    console.log(b+ "는 2배수");
    if(b%5 ==0){
        console.log(b + "는 5배수")
    };
}
//b를 5로 하면 2의 배수가 아니어서 밑에 if문 자체가 죽어버림 
//b를 10으로 하면 첫 조건이 맞으니까 넘어가고 밑 조건도 실행한다 

let c = 0;

if(c % 3 == 0){
    console.log("3배수");

    if (c % 4 == 0){
    console.log("4배수");
    }else{
    console.log('3배수라 첫번째 실행됬지만' + '4배수는 해당안됨');    
    }
}else{
    console.log('c에 4배수들어있지만 중첩 if라' + '실행자체가 안됨');
}


console.log('---------------------------------3');

let id = 'hj';
let pw = '000';

/*
 Test 
 id 틀리면 'id error' 출력
 pw 틀리면 'pw error' 출력
 
 둘다 맞으면 로그인 성공 출력 
*/

//if다중, if else 여러 1, 중첩 
if (id != 'hj'){
    console.log('id error');
}
if (pw != '000'){
    console.log('pw error');
}
if (id == 'hj' && pw == '000'){
    console.log('로그인 성공')
}
