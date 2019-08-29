var module = require('./custom_module');

// 1. formatted 특수문자 %d를 사용해서 module.sum() 에서 리턴된 숫자값을 출력
console.log('sum = %d', module.sum(100));

// 2. formatted 특수문자 %s 를 사용해서 module.var1의 문자값을 출력
console.log('var1 = %s', module.var1);

// 문자열 여러개 출력하기
console.log('var1 = %d, var2 = %s, var3 = %d', 105, 'Hello!', 10098);
