// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';
import Param1 from './component/Param1';
import Param2 from './component/Param2';

function App() {
  return (
    // javascript 주석
    <div className="App">
      {/* jsx 주석 */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path 는 URL을 의미 */}
          {/* 중괄호로 감싸주지 않으면 컴포넌트로 알기 때문에 jsx 문법으로 보게 {}괄호 사용 */}
          <Route path="/Comp1" element={<Comp1 />} />
          <Route path="/Comp2" element={<Comp2 />} />
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path="/param/:mid" element={<Param1 />} />  {/* /param/ 뒤에 변수(값)이 넘어올 때 처리됨 */}
          <Route path="/param" element={<Param2 />} /> {/* /param 뒤에 QueryString(?변수=값&변수=값)으로 값이 전송될 때 처리됨 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
