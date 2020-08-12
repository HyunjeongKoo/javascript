"use strict";

/*
for(처음값, 조건, 증감;){
    반복할 코드

}

*/

//while 
let a; //선언, 생성, 만들
a = 1; // 최초로 값을 넣은 상태(초기화)

let i = 0; 
while(i < 5) {
    console.log(i);
    i++;  //이부분 꼭 써야함.  안그러면 계속 0 됨 (무한루프) 근데 썼기 때문에 하나씩 증가함 
}

console.log(i);


let i2 = 0;
while (i2 < 10) {
    let i3 = 0;
    console.log('이건 i3 : ' +i3);
    i3 += 2;
    i2++;

    
}

// 1+2+3+4... 몇까지 더해야 500이 넘나? 


let a2 = 1;
let hab = 0;
while (hab < 500){
   // console.log(a); //4
    hab = hab + a2;
    a2++; 

}
  console.log(a2-1);


let n = 1; 
let sum = 0; 
while (sum < 5000){
    sum = sum + n;
    n++;
}
console.log(sum-1); 

console.log('---------------------------')

//while에서 나온 것이 for 문, 상호대체 가능
//반복횟수가 명확한 경우 직관적임(3번) 
//ㅋㅋㅋ 3번 출력하기  
for (let j = 0; j < 3; j++) {
    console.log('zzz');
  //  alert(j);

}
//console.log(j);
//let과 for의 let 차이. for은 지역으로 정해진거고 (for문 지역안에)
//while은 밖에 let으로 빠져있음 

for(let j = 0; j <=6 ; j+=2){
    console.log(j);


}

for(let j = 0; j<=9 ; j++){
    console.log(`2 X ${j} = ${2*j}`);
}

console.log('---------------------------------------')

// 3* 홀수만 출력 

//이게 가장 좋은 방법 
for(let j = 1 ; j <= 9 ; j+=2){
    console.log(`3 X ${j} = ${3*j}`);
}

console.log('-----------------------------------------')

for(let j = 1 ; j < 10; j++){
    if(j%2==1){
        console.log(`3 x ${j} = ${3*j}`)
    }
}

console.log('-----------------------------------------')

for(let j =1 ; j<10 ; j++){
    if(j%2 == 0){
        continue;
    }
    console.log(`3 x ${j} = ${3*j}`)
}

console.log('-----------------------------------------')

//do-while 
//조건에 상관없이 한번은 실행 보장(실무에선 안쓰는편)
let x = 2;
do{
console.log(x);
x++;
} while (x < 10);

//for문 안에서 쓴 변수는 지역변수라서 다른데서 똑같은 변수 써도 
//상관이 없음
