import {useState} from 'react';
import {useRef} from 'react';
import './naver-signin-in.css';



function App() {

  const formRef = useRef<HTMLFormElement |null>(null);

  let [isIdCheck, setIdCheck]= useState<boolean>(false); // 제너릭으로 타입 정함
 //       상태명      상태를 바꾸는거     타입(제너릭) 기본값
  const [id, setId] =useState<string>('');

  //let isIdCheck2 = false;
  const onSubmitHandler = () => {
    //isIdCheck(!isIdCheck);
    //isIdCheck2=!isIdCheck2;
    //console.log(isIdCheck2);
    if(!id.trim()){
    setIdCheck(true);
    return;
    }
    setIdCheck(false);
    if(formRef.current){
    formRef.current.submit();}
  }


  return (

    <div id="wrap" className="wrap">

      <div className="header">
        <div className="header-inner">
          <a href="https://www.naver.com" className="logo">
            <h1 className="blind">NAVER</h1>
          </a>

          <div className="lang">
            <select className="select">
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </div>


      <div className="main">
        <div className="content">
          <div className="sign_in_wrapper">
            <form ref={formRef} id="form" action="https://nid.naver.com/nidlogin.login" method="POST" >
              <ul className="panel_wrap">
                <li className="panel_item">
                  <div className="panel_inner">

                    <div className="id_passwrod_wrapper">
                      <div className="input_row">
                        <div className="icon_cell">
                          <span className="icon_id">
                            <span className="blind">아이디</span>
                          </span>
                        </div>
                        <input type="text" className="input_text" maxLength = {41} placeholder="아이디" name="id" onChange={(event) => setId(event.target.value)} />
                      </div>
                      <div className="input_row">
                        <div className="icon_cell">
                          <span className="icon_pw">
                            <span className="blind">비밀번호</span>
                          </span>
                        </div>
                        <input type="password" name="pw" id="pw" className="input_text" maxLength={16} placeholder="비밀번호" />
                      </div>
                    </div>

                    <div className="login_keep_wrap">
                      <div className="keep_check">
                        <input type="checkbox" id="keep" name="nvlong" className="input_keep" value="off" />
                        <label htmlFor="keep" className="keep_text">

                          로그인 상태 유지
                        </label>
                      </div>
                      <div className="ip_check"></div>


                    </div>
                    {isIdCheck && ( 
                    <div className="login_error_wrap" id="login_error">
                      <div className="error_message">
                        <strong>아이디</strong>를 입력하세요
                      </div>
                    </div>

                    )}
                  
                    <div className="btn_login_wrap">
                      <button type="button" className="btn_login" id="log_login" onClick={ () => onSubmitHandler()}>
                        <span className="btn_text">로그인</span>                                                                            
                      </button>

                    </div>
                  </div>


                </li>

              </ul>

            </form>
          </div>

          <ul className="find_wrap">
            <li>
              <a target="_blank" className="find_text" href="https://nid.naver.com/user2/help/pwInquiry?lang=ko_KR">
                비밀번호 찾기
              </a>
            </li>
            <li>
              <a target="_blank" className="find_text" href="https://nid.naver.com/user2/help/idInquiry?lang=ko_KR">
                아이디 찾기
              </a>
            </li>
            <li>
              <a target="_blank" className="find_text" href="https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR">
                회원가입
              </a>
            </li>

          </ul>

          <div className="banner_wrap">
            <div className="banner_contnet">
              <img className="banner_img" src="https://ssl.pstatic.net/melona/libs/1378/1378592/fe1b4bd9453e84b57ed7_20230407151920279.jpg" />

            </div>



          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_inner">
          <ul className="footer_link">
            <li><a className="footer_item" target="_blank" href="https://policy.naver.com/rules/service.html"><span className="text">이용약관</span></a></li>
            <li><a className="footer_item" target="_blank" href="https://policy.naver.com/rules/privacy.html"><span className="text"><strong>개인정보처리방침</strong></span></a></li>
            <li><a className="footer_item" target="_blank" href="https://policy.naver.com/rules/disclaimer.html"><span className="text">책임의 한계와 법적고지</span></a></li>
            <li><a className="footer_item" target="_blank" href="https://help.naver.com/service/5640/category/bookmark?lang=ko"><span className="text">회원정보 고객센터</span></a></li>
          </ul>
          <div className="footer_copy">
            <a target="_blank" href="https://www.navercorp.com/">
              <span className="footer_logo">
                <span className="blind">네이버</span>
              </span>
            </a>
            <span className="text">Copyright</span>
            <span className="corp">@ NAVER Corp.</span>
            <span className="text">All Rights Reserved.</span>

          </div>


        </div>


      </div>
    </div>
  );
}


export default App;
