"use strict";

/*
조건문

if(condition){
  만족시 이 범위가 실행
} else { 
  아니면 이범위가 실행(조건 외)

}

*/

let age = 28;
//나이가 70이상이면 '안녕하십니까' 아니면 '어쩌라고'
if (age >= 70){
console.log('안녕하십니까~');

} else {console.log('어쩌라고');}

let child = {age: 10, height : 100};
//나이가 10살 미만이고, 키가 150 미만이면 'ㅋㅋㅋ'
//아니면 '안녕?'
if(child.age < 10 && child.height < 150 ){
    console.log('으아아ㅏㅇ')
} else { console.log('뭠마');}

//아기가 1살 넘고 5살 미만이면 '어그래' 
if(child.age > 1 && child.age < 5){
    console.log('어그래')
} else { console.log('배고파');}
//아니면 1<child.age <5 할수도 있는데 여기서 else에 
//T쓰면 안나옴 

console.log('-----------------------');

//성인, 아이가 동반탑승 되는지 가능 여부

let adult = {age: 30, height: 180};


//성인은 나이가 20살 넘으며, 아이가 3살 이상이고, 아이 키가
// 80이상이면 동반탑승 가능 
// 조건에 안맞으면(아니면) 탑승 불가 

if(adult.age >20 || child.age >= 30 && child.height >= 80)
{console.log('동반탑승가능')}
else {console.log('탑승불가')};
// or 로 설정했을 떄 앞에가 맞으면 뒤에를 안봄
//근데 만약 뒷부분에 거짓된 조건이 있으면....그래도 앞에가 맞으면 true 나옴
//왜냐하면 &&가 ||보다 먼저인 연산자 우선순위가 있어서  


/*
t//t && t = t // = 은 대입 연산자. 우선순위꼴지. 
t//t && f = f
t//f && t = t
t//f && f = t

*/

