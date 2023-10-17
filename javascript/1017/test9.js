// test9.js
// 문자함수 연습
'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'
let text2 = 'ABC    BCABC    GHI    JKLABCMN......   ABC.... OPQ    ';

// length : 길이
// substring() : 특정 위치의 문자열 추출
// indexOf() : 문자열 검색(인덱스값 반환, 없으면 -1반환)
// includes() : 문자열 검색(ture/false 반환)
// concat() : 문자열 결함
// slice() : 지정된 인덱스 위치부터 문자열 가져오기
// trim() : 문자 열의 앞 뒤 공백 절삭
// trimStart() : 앞의 공백만 절삭
// trimEnd() : 뒤의 공백만 절삭
// replace()
// replaceAll()
// toUpperCase() : 대문자로 치환
// toLowerCase() : 소문자로 치환
// charAt() : 문자열 1개씩 추출
// charCodeAt() : 지정된 인덱스번지 영문자의 아스키 코드값 출력
// split() : 지정된 문자로 분리 단, 분리된 자료는 배열로 저장해서 사용

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;

let str = '012345678901234567890123456789<br />'
str += text2 + '<hr /><br/>';
// str +=  text1.substring(5,10);
// str +=  text1.slice(5,10);
// substring과 slice는 사용 용법이 같음 (값도 같음) , substring을 많이 사용함

// str +=  text1.indexOf('abcz');


// str += text1.substr(5,10); 
// substr(인덱스번호,가져올 개수) <취시선이 있는 명령어는 이제 잘 사용하지 않는 것>

// str += text2.replace('ABC','ooppqq');
// replace(변경 할 문자, 변경 내용); 첫 번째 검색된 문자열만 치환 
// str += text2.replaceAll('ABC','ooppqq');
// 문장 안의 일치되는 모든 문자열을 치환

// str += text1.toUpperCase();
// str += text1.toLowerCase();

// str += text1.concat("안녕",text1);

// str += text2 + '안녕';
// str += text2.trim() + '안녕';
// str += '안녕1' + text2.trim() + '안녕2';
// str += '안녕1' + text2.trimStart() + '안녕2';
// str += '안녕1' + text2.trimEnd() + '안녕2';

// str += '안녕1' + text1.charAt(3) + '안녕2';
// str += '안녕1' + text1.charCodeAt(0) + '안녕2';

// let temp = text2.split('ABC');
// // ABC 기준으로 잘라내기
// for(let s of temp) {
//   str += s + '<br />';
// }
// str += "길이 : " + temp.length;
// 앞에 절삭된 것 기준으로 길이값 나옴 +1개로 생각하면 됨

let title = ['지역번호','국번호','전화번호'];
let telTemp = '010-1234-5678';

let tels = telTemp.split('-');

// tels.forEach((data,idx) => console.log(data,':',idx));
tels.forEach((data,idx) => console.log(title[idx],' : ', data));
tels.forEach((data,idx) => str += data + '<br/>');

demo.innerHTML = str;
