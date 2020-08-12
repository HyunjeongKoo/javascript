let heykk = 'hey ';
let youkk = "you! ";
let q = "where are you from?"; 

console.log(heykk);
console.log(youkk)
console.log(q);

console.log(heykk + youkk + q);

console.log(q.length); // 19, 길이 
console.log(q.charAt(4)); //e
console.log(heykk.toUpperCase()); //메서드 = 함수 
console.log(q.indexOf('r')); //index는 0부터 센다(갯수를)
console.log(q.lastIndexOf('r')); // 뒤에서 부터 찾아서 나온 r 이 몇번째에 있나 

console.log('-----------------1');

//boolean (true, false)

//false : "", null, 0, undefined, NaN (Not a number)
//true : 1, other

let t = true; //참 거짓이 들어가면 타입이 boolean 이 된다.  
let f = false;
console.log(typeof t);

let cond = 5 > 3;
console.log(typeof cond); //??왜 boolean?
console.log(cond);

let myname = '구현정'
let myage = 28; 

console.log(myname);
console.log(myage); //지금까지는 변수에 담아서 출력. 

// 만약 이름 : 알 
// 나이 : 20 이렇게 나와야 한다면 위 처럼 쓰면 안댐. 
console.log('이름 : ' + myname);
console.log('나이 : ' + myage);

//혹은
console.log('이름 : ' + myname + ' 나이 : ' + myage);
//근데 일케 말고 줄 바꾸고 싶다. 그러면 

console.log('이름 : ' + myname + '\n나이 : ' + myage);
// \n 줄바꿈 

function call() { 
        document.write('이름 : ' + myname + '<br>나이 : ' + myage); } 
//함수 이름은 내 맘대로 바꿀 수 있음 
//html 에서 call 쓰고 더블클릭하면 되야되는데 왜 안될까 ? 괄호를 안써서. 
//메서드 호출할 때는 꼭 괄호 써야!! 
//근데 괄호 써서 더블클릭하면 또 붙여서 나옴. 
//html의 doctype html  document : html 문서 전체 
//<br>나이 -> 더블클릭하면 한줄 띄우고 나옴! 

/*
버튼을 누르면 폰정보 출력(console, document)

모델명 : 아이폰x
제조사 : 애플
화면 사이즈 : 5.5inch
가격: 1200 $
재고 : true

*/ 

let model  = 'IphoneX';
let Manufacturer = 'Apple';
let Size = 5.5;
let Price = 1200;
let Stock = true;

function dbclk() {document.write('model : ' + model + '<br>Manufacturer : ' + Manufacturer
    + '<br>Size : ' + Size + '<br>Price : ' + Price + '<br>Stock : ' + Stock)
};

console.log(
`모델 : ${model} 
제조 : ${Manufacturer}
가격 : ${Price}`);

function call2(){
    document.write(`모델 : ${model} <br> 
    제조 : $(manufacturer)<br>
    가격 : ${price}`);
}

console.log(`-------------2`)

//js : 다이나믹 타이핑 언어 


//let myname = '구현정'
//let myage = 28; 

console.log(typeof myname); //string
console.log(`이름 : ` + myname);
myname = 5;
console.log(typeof myname); //number
//이렇게 되면 변수 명을 잘 짓는게 중요하다는 것을 알 수 있다. 
myname = 10 + '00'; //숫자 10과 문자열 00이 붙어서 나옴
//숫자+문자열 = string 
console.log(typeof myname);

let myAge2 = myage + ""; //형 변환() = data type 변화. 
//여기 myage를 스트링으로 형변화 하라고 한다면? 
// +"" 붙인다

//myage2를 number로 형변화하라 
//let myage3 = myAge2 -"";
let myage3 = myAge2 * 1;
console.log(typeof myage3);

console.log('--------------3');


// object! 
let me = {name : '미스쿠', age : 28};
console.log(me);
//var은 블럭안에서 선언했었고 여기서는 {}써서 값을 쓴것 

console.log(me.name)
// '.' me에 있는 name-> 원하는 값만 뽑을 수 있다. 
me.name = '마스터 쿠';
console.log(me.name);

me = {height : 164, weight: 47};
console.log(me);

const me2 = {name : '미스쿠우', age : 28};
console.log(me2.name);
me2.name = 'DJ쿠';
console.log(me2.name);

//me2 = {height : 164, weight: 47};
//console.log(me); -> error / Assignment to constant variable. Error. 

//원본이 아닌 다른거 쓸 때 : 참조 








