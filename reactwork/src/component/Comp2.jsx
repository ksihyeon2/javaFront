import React, { useState } from 'react';
// Hooks : 값(변경되는 값들)을 넣어주기 위한 문법 ( const[변수명, 함수명] = useState(초기값); )
// 함수명은 변수명의 setter 함수 : setXxx()

let param1Sw = 0;

const Comp2 = () => {
  const [param1, setParam1] = useState("아톰");
  
  const myFunc = () => {
    if(param1Sw === 0) {
      setParam1("안녕하세요");
      // 값을 주기 위해 변수에 담아야 하므로 set으로 지정하고 앞의 변수 첫번째 자리를 대문자로 설정
      param1Sw = 1;
    } else {
      setParam1("아톰");
      param1Sw = 0;
    }
  }

  const [count, setCount] = useState(100);

  // count 값을 1씩 증가하는 함수
  const onIncrease = () => {
    setCount(count+1);
  }
  // count 값을 1씩 감소하는 함수
  const onDecrease = () => {
    setCount(count-1);
  }

  // 텍스트박스의 값을 변경하면 param2 변수의 값을 변경시켜서 화면에 출력하는 함수
  const [param2, setParam2] = useState("");
  const [paramV, setParamV] = useState("");

  const textInput = (e) => {
    // 변경될때마다 값을 읽어 변경해야 하기 때문에 감시자를 설정해야 함
    console.log(e.target);
    console.log(e.target.name , e.target.value);
      const { name, value } = e.target; // 구조 분해(구조 분할)
      // target은 입력된 속성과 name이 넘어옴
      
    setParamV(name);
    setParam2(value);
  }

  // 버튼을 누르면 색을 변경시켜주는 state
  const [textColor, setTextColor] = useState("red");

  return (
    <div className='comp2'>
      <h3>Comp2</h3>
      <hr />
      <p>{param1}</p>
      {/* 위에서 만든 변수를 사용하기 위해서는 Hooks을 생성해야 사용할 수 있음 */}
      <button onClick={myFunc}>버튼</button>
      {/* jsx는 onClick 함수 () 생략 */}
      <hr />
      <div>count : {count}</div>
      <div>
        <button onClick={onIncrease}>증가</button> &nbsp;
        <button onClick={onDecrease}>감가</button>
      </div>
      <hr />
      <div>입력변수 : {paramV}</div>
      <div>입력값 : {param2}</div>
      <input type='text' name='param2' onChange={textInput} />
      <hr />

      {/* CSS 적용하기 (inline style 사용) */}
      <p style={{backgroundColor:textColor, fontSize:'15pt', color:'white'}}>안녕하세요</p>
      <div>
        <button onClick={() => setTextColor("blue")}>파랑</button> &nbsp;
        <button onClick={() => setTextColor("green")}>녹색</button> &nbsp;
        <button onClick={() => setTextColor("red")}>빨강</button>
      </div>
    </div>
  );
};

export default Comp2;