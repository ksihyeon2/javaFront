//  test10.js
// 숫자 함수 연습
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = 31.5;

let num = 0;

// 최대/최소값
num = Math.max(su1,su2,su3,su4,su5);
num = Math.min(su1,su2,su3,su4,su5);

// 무조건 올림
num = Math.ceil(su3);
num = Math.ceil(su4);

// 무조건 내림
num = Math.floor(su3);
num = Math.floor(su4);
// 무조건 내리는 것이기 때문에 음수인 경우에는 원래 값보다 더 작아짐

// 무조건 버림
num = Math.trunc(su3);
num = Math.trunc(su4);

// 소수 이하는 표현이 안 되고 반올림 됨
num = Math.round(su3);

// 매개 변수로 지정된 소수 이하 자리수 까지 반올림 처리되어 표현
num = su3.toFixed(1);
num = su5.toFixed(0);

// 제곱근
num = Math.pow(2,5);

// 양수값 표현
num = Math.abs(su2);

// 루트형식
num = Math.sqrt(16);

// 난수 발생
num = Math.random(); //  0 <= 난수 < 1    실수형 난수
num = Math.random() * 10; //  0 <= 난수 < 10    일의 자리 실수형 난수
num = parseInt(Math.random() * 10); //  0 <= 난수 < 10    일의 자리 정수형 난수
num = parseInt(Math.random() * 10) + 1; //  1~10까지의 정수형 난수
num = parseInt(Math.random() * (14-5+1)) + 5; // 5~14까지의 정수형 난수

demo.innerHTML = num;