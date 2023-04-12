console.log('Hello Javascript!');

// 변수 선언 방법이 다르다! 
// 1.변수의 타입이 존재하지 않음

var variable_name;
variable_name = '변수 값';
console.log(variable_name.trim());
variable_name = 10;
// console.log(variable_name.trim()); 변수타입은 지정하지않아도 되지만 데이터의 타입은 정해져있기 때문에 적합하지 않은 메서드, 함수를 사용했을때 확인하기가 어렵다. 





// 2. 변수 선언 키워드 
// var, let, const 
if(10 == 10){
    var variable_name2='변수';

}
//console.log(variable_name2);

let let_variable_1; // let java에서 일반적으로 쓰던 변수처럼 사용하게함 코드 블럭 내에서만 사용할수 있을 뿐아니라 동일한 변수명을 지닐수 없음
//let let_variable_1; 

if(5==5){
    let let_variable_2 = ' 블럭 변수';
}
//console.log(let_variable_2);

const const_variable_1='상수';//상수
//console.log(const_variable_1);

// 3. 데이터의 타입
// 문자열 string : '', "" 둘 다 문자열로 인식함 객체가 아니기 때문에 소문자 s 씀!
let stringVariable1 = '문자열';
let stringVariable2 = "문자열"; // html 내부에서 스크립트로 사용할떄에는 lowersnakecase를 사용하고 개발언어로써 자바 스크립트를 쓸때는 lowerCamelCase를 사용한다.
console.log(typeof(stringVariable1,stringVariable2));

// 숫자 number : 정수 ,실수 모두 포함 
let numberVariable1= 10;
let numberVariable2 = 22.22
console.log(typeof(stringVariable1,numberVariable2));//뒤에 기준으로 보여줌
// 논리 boolean : true , false

let booleanVariable = true;
console.log(typeof(booleanVariable));
// null 타입
let nullVariable=null;
console.log(typeof(nullVariable));

// 배열 :[]

let arrayVariable=[1,'a',false]; // 변수에 타입이 정해져있지 않기 때문에 배열안에 어떠한 데이터 타입이 들어가도 상관이 없다

// 객체 : {}
let objectVariable={
    "key":"value",
    "name": "John",
    "age": 20,
    "object" : {"key1":1 }
}; // json 의 형태 임 객체안에 객체를 다시 집어 넣을 수 있음 

// 연산자 

// 1. 나눗셈 연산자
let number1 = 10/3;
console.log(number1);

// 2. 제곱 연산자 (**)
let number2= 2**4;
console.log(number2);

// 3. 비교연산 ==, === 
let numberValue10=10;
let stringValue10='10';
console.log(numberValue10==stringValue10); //값자체는 동일함
console.log(numberValue10===stringValue10); // 데이터 타입은 동일하지않음

// if 조건
let tmpValue = 0;
if(tmpValue){
    console.log('true'); // 자바에서는 boolean 형태만 if 안에들어갔지만 자바 스크립트에서는 상관없음 숫자 0 은 false 나머지는 true로 반환함 음수도 포함
}                        // 문자열의 경우에도 빈문자열은 false 내용물이 들어가있으면 true로 판단함 근데 빈 배열,object는 true로 판단함 주소의 형태로 잇기때문 
else console.log('fasle');


// class
class Human{
    name;
    age;
    address;
    constructor(name,age,address){
        this.name = name;
        this.age=age;
        this.address=address;
    }

}

let humanObject = new Human('john', 30, '붓싼');
console.log(humanObject.name);
// 비구조화 할당
let {name, ...others} = humanObject; // 클래스의 객체를 오브젝트로 바로 넣을수 있고 거기서 또 요소와 객체를 바로 분리 others로 할 수 있음
name ='micle';
humanObject={...humanObject,name};
//{name, age, address, name}의 형태임 뒤에 있는 name 으로 덮어 씌워버림 스프레드 연산자 라고 함

const tmpArray=[1,'a', true];
const [number,...otherArray]=tmpArray;
console.log(number);
console.log(otherArray);
