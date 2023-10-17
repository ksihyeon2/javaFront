// test8.js
// 배열 처리에 대한 사용 예
'use strict';
let arr1 = [
  '문자자료',
  5,
  [2,4,6,8],
  {tel : '010-1234-5678'},
  function() {console.log('안녕하세요');}
];
// 배열에는 문자, 숫자, 배열, 객체(요소 데이터로 들어감), 익명함수 를 넣을 수 있음
console.log(arr1);
console.log("1. : ",arr1[2]);
console.log("2. : ",arr1[4]);
console.log('---------------------');

let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,5,7];
arr2[3] = {name:'홍길동'};
arr2[4] = function(){console.log('방가');};
console.log(arr2);

arr2.push(25);
console.log(arr2);
console.clear();

let str1 = arr2.join('-');
// join() : 분리해서 ()로 설정한 값으로 결합하기 위한 명령어
// 객체는 object로 값을 가져옴
console.log(str1);
console.log('--------------------------------');

arr2.forEach(function(data,idx){
  console.log(data," : ",idx);
});

arr2.forEach((data,idx) => {
  console.log(data," : ",idx);
});

arr2.forEach((data,idx) => console.log(data," : ",idx));
console.log('--------------------------------');

arr2.map((data,idx) => console.log(data,' : ',idx));
console.log('--------------------------------');

// 수식으로 걸러내기 : filter()
arr2.filter(function(data,idx) {console.log(data," : ",idx)});
console.log('--------------------------------');
arr2.filter((data,idx) => console.log(data, " : " , idx));
console.log('--------------------------------');
// 앞에 조건을 주지 않으면 forEach나 map과 값이 같음

// filter을 사용하여 짝수 인덱스만 추출
let res1 = arr2.filter((data,idx) => idx % 2 == 0);
console.log('res1 : ',res1);

// 체이닝 기법
arr2.filter((data,idx) => idx % 2 == 0).map((data,idx) => console.log('연습 ',data,' : ',idx));
// 변수로 받기(변수를 미리 배열로 선언해 놔야 함)
let res2 = new Array();
res2 = arr2.filter((data,idx) => idx % 2 == 0 ).map((data) => data);
console.log('res2 : ',res2);

let arr3 = [10,8,20,15,11,17];
console.log('arr3 : ',arr3);
// sort는 문자로 꺼내오기 때문에 숫자형식으로는 8이 제일 작지만 문자 형식으로는 앞 글자부터 비교하기 때문에 8이 제일 큰 값으로 해석됨

// 오름차순 정렬 : sort() ==> 무조건 문자열 형식으로 정렬(들어있는 타입이 모두 같지 않기 때문에 문자로 형변환됨) 
let res3 = arr3.sort();
console.log('res3 : ',res3);

// 내림차순 정렬 : reverse()  ==> 문자열 형식으로 거꾸로 정렬
let res4 = arr3.reverse();
console.log('res4 : ',res4);

console.log('arr3 : ',arr3);
arr3.forEach((data,idx) => console.log(data,':',idx));
// sort하거나 reverse하면 원래 데이터의 배열도 바뀜
// console.clear();

// 최대값 : Math.max() / 최소값 : Math.min() 
// Math로 수학 형식으로 꺼내오기 때문에 문자 형식으로 처리 안 됨
let max = Math.max(10,8,20,15,11,17);
console.log('max : ', max );
let min = Math.min(10,8,20,15,11,17);
console.log('min : ', min);

let max2 = Math.max(...arr3);
// 배열의 값이 숫자라고 지정해 주는 명령어 : ...
console.log('max2 : ',max2);
let min2 = Math.min(...arr3);
console.log('min2 : ',min2);