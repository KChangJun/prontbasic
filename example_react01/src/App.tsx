import { SetStateAction, useState } from 'react';
import { useRef } from 'react';
import './naver-signin-in.css';
import { Dispatch } from 'react';
import Header from './view/HeaderView'; // 폴더안에 index를 기본으로 받아들임 해당폴더에 index 파일 이름을 바꾸면 알아서 바꿔줌 그리고 Header 로 받지 말고 다른 이름으로 받아도됨. export default로 설정햇기 때문에
import Footer from './view/FooterView';
import Main from './view/MainView';


// 






function App() {


  return (

    <div id="wrap" className="wrap">


      <Header />
      <Main />
      <Footer />

    </div>
  );
}


export default App;
