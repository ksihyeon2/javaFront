import { student, students } from "../data/data";
import Student from "./Student";

const Comp1 = () => {
/* js 영역*/ 

  return(
  <div className="comp1">
    {/* jsx 영역 */}
    <h3>이곳은 Comp1 입니다.</h3>
    <p>
      {/* 한 개의 값만 가져오기*/}
      {student.name} / {student.age} / {student.address}
    </p>

      {/* 여러 개의 값(배열) 가져오기 <map 사용>*/}
    {/* <span>
      {students.map(s => (
        <p>{s.name} / {s.age} / {s.address}</p>
      )) */}
        {/* // jsx에는 each가 없지만 map은 가능
        // ()안에는 변수명의 한 글자만 가져와도 됨 */}
      {/* }
    </span> */}
    
    <hr />
    {/* 한 개의 자료 출력 */}
    <Student stu={student}/>
    {/* 변수명은 Student에서 지정한 변수로 적어야 함 */}

    {/* 여러 개의 자료 출력 */}
    {students.map( s => (
      <div>{s.name} / {s.age} / {s.address} </div>
    ))}
  </div>
  );
} 

export default Comp1;