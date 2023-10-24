import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* className은 앞의 변수명으로 사용하며 대신 앞에 대문자를 소문자로 변경 후 사용 */}
      {/* <h2>이곳은 Header 입니다.</h2> */}
      {/* <a href="https://www.naver.com">Home</a>
      <a href="#">Comp1</a>
      <a href="#">Comp2</a>
      <a href="#">Comp3</a> */}
      {/* react에서는 a태그 대신에 router를 사용한다. router에는 href대신에 Link태그 사용 */}
      <Link to = "/">Home</Link>
      <Link to = "/Comp1">Comp1</Link>
      <Link to = "/Comp2">Comp2</Link>
      <Link to = "/Comp3">Comp3</Link>
    </div>
  );
}

export default Header;