// test4.js
'use strict';

  
  class Member {
    // name;
    // age;
    // 매개 변수명과 필드명이 같을 경우 생략 가능
    
    // 생성자
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
      // this.을 입력하면 위에 필드명 생략할 수 있음
    }
    // getter 생성
    get name() {
      return this._name;
    }
    get age() {
      // return this._age -1;
      return this._age ;
    }
    get color() {
      return this._color;
    }
    // setter 생성
    set name(name) {
      this._name = name;
    }
    set age(age) {
      if(age < 1 ) {
        age = 1;
      }
      this._age = age;
    }
    set color(color) {
      if(color == '깜정' || color == '흑색') {
        color = '검정';
      }
      this._color = color;
    }
  } 