/**
 * let 의 경우 변수값을 재할당 해도 되지만 const의 경우 불가
 * let, const 둘다 hoisting 불가
 * var는 전부 가능
 */ 

let name = '1';

// name = '홍길동';

function test(){
    let name = '2';
    console.log('name : ', name);
}
test();
console.log('이름 : ', name);
