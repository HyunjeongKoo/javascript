"use strict";

/*
switch case(조건문)
if문과 대체 가능 

*/

let age = 20;
switch (age) {
    case 2 : 
    console.log('으으엑');
    break;

    case 20:
        console.log('애새끼')
    break;
    
    case 30:
        console.log('20대 여기에 잠들다')
    break;

    default:
        console.log('나머지인간');
        break;
}

//1. 아아 2. 카페라뗴 3. 라떼는마리야새끼야 4. 단고 
// 아니면 "내가 왜만들어" 

let menu = 5;
switch (menu) {
    case 1:
        console.log('아아')
    break;

    case 2:
        console.log('카페라떼')
    break;

    case 3:
        console.log('라뗴는마리야새끼야')
    break;

    case 4:
        console.log('단고')
    break;

    default:
        console.log('내가 왜만들어')
        break;
}

//달력 (x월은 x일까지)
//ctrl + a 한 뒤 ctrl+k , f 

//1,3,5,7,8,10,12 = 31일까지 / 2 = 28일까지 / 4,6,9,11 = 30일까지 
let month = 5;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

    console.log('31일까지');
    break;

    case 4:
    case 6:
    case 9:
    case 11:

    console.log('30일까지');
    break;

    case 2:
    console.log('28일까지');

    default:
    console.log('모야');
    break;
}

//군대 
let grade = '일병';

switch (grade) {
        case '이병':
        console.log('눈치, 관등성명');
        
        case '일병':
        console.log('훈련');
        
        case '상병':
        console.log('이별');
        
        case '병장':
        console.log('잠');
        break;

    default:
        break;
}
//case는 break 만날 때 까지 내려감  
