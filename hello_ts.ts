console.log('HEllo Typescript!');

// 변수
let number:number; // 변수선언 : 변수타입; 까지가 선언임
number=10;
// number = 'string';
let string = 'string'; // 데이터 타입을 지정 하지 않아도 최초에 들어간 데이터타입(초기화)에 따라 변수 타입이 결정됨

// 함수의 타입
//const function1 =(art:number) : string =>{
 //   return 'string';
//};// 매개변수 뒤에 반환 타입을 정해줄수 있음

//객체
class Object1{
prop1 : string;
prop2 : number;

    constructor(prop1:string , prop2:number){
        this.prop1=prop1;
        this.prop2=prop2;

    };

}

const object1: Object1= {prop1: 'prop1', prop2: 8}; // : 뒤에는 타입이 들어갑니다

// 2. type 키워드 사용
type Object2 = {
    prop1 : string,
    prop2 : number;
} // json 형태임
const object2:Object2={prop1: 'prop1', prop2: 8};

// 3. interface 인터페이스를 활용

interface Object3{
    prop1:string;
    prop2:number;
    func1?: (arg1:number) => string; // 함수 타입만 선언하고 내용물을 정하지 않음 내용물은 넣을때 정의함 그리고 함수명 뒤에 ?를 붙이면 내용물을 넣어도, 안넣어도 오류가 안생김
};


const object3:Object3 | null | number | object = {prop1: 'prop1', prop2: 8}; // 타입 뒤에 | (or)을 붙여서 변수에 대한 타입을 여러개 설정할 수 있다.
interface Object4{
    prop3: string;
    prop4: number;
}
const object4:Object3 & Object4 = {prop1: 'prop1', prop2: 8,prop3:'aefaef',prop4: 2}; // or연산자가 가능하듯이 and &연산자도 변수 타입 설정시에 사용 가능하다. enum? studing 
// 4.  enum
enum Fruits { 
    APPLE = '사과',
    BANANA = '바나나',
    MELON = '멜론'
}
const fruit : Fruits = Fruits.APPLE; // 변수 : 타입 = 타입.요소로 설정함
console.log(fruit);




