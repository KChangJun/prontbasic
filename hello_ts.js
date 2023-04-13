console.log('HEllo Typescript!');
// 변수
var number; // 변수선언 : 변수타입; 까지가 선언임
number = 10;
// number = 'string';
var string = 'string'; // 데이터 타입을 지정 하지 않아도 최초에 들어간 데이터타입(초기화)에 따라 변수 타입이 결정됨
// 함수의 타입
//const function1 =(art:number) : string =>{
//   return 'string';
//};// 매개변수 뒤에 반환 타입을 정해줄수 있음
//객체
var Object1 = /** @class */ (function () {
    function Object1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    ;
    return Object1;
}());
var object1 = { prop1: 'prop1', prop2: 8 }; // : 뒤에는 타입이 들어갑니다
var object2 = { prop1: 'prop1', prop2: 8 };
;
var object3 = { prop1: 'prop1', prop2: 8 }; // 타입 뒤에 | (or)을 붙여서 변수에 대한 타입을 여러개 설정할 수 있다.
var object4 = { prop1: 'prop1', prop2: 8, prop3: 'aefaef', prop4: 2 }; // or연산자가 가능하듯이 and &연산자도 변수 타입 설정시에 사용 가능하다. enum? studing 
// 4.  enum
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\uC0AC\uACFC";
    Fruits["BANANA"] = "\uBC14\uB098\uB098";
    Fruits["MELON"] = "\uBA5C\uB860";
})(Fruits || (Fruits = {}));
var fruit = Fruits.APPLE;
console.log(fruit);
