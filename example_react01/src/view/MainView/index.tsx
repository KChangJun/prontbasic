import React from 'react'
import {useRef, useState} from 'react'
import NaverInput from '../../component/InputComponent';
import NaverFind from '../../component/FindComponent';

const FIND_LIST = [
    {
        title : '비밀번호 찾기',
        link : 'https://nid.naver.com/user2/help/pwInquiry?lang=ko_KR',
    },
    {
        title : '아이디 찾기',
        link : 'https://nid.naver.com/user2/help/idInquiry?lang=ko_KR',
    } ,  
    {
        title : '회원가입',
        link : 'https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR',
    }

];


export default function Main() {
    // {id,setId}:any 에 대한 설명 : 상태를 받을떄 객체로 받아야함. main에 넣어 줄때에도 객체로 넣어주어야함.객체니까 인터페이스로 만들어줄수있음
    const formRef = useRef<HTMLFormElement | null>(null);
    const [id, setId] = useState<string>('');
    const [isIdCheck, setIdCheck] = useState<boolean>(false); // 제너릭으로 타입 정함
    //       상태명      상태를 바꾸는거     타입(제너릭) 기본값
    const [password, setPassword] = useState<string>('');
    //let isIdCheck2 = false;
    const onSubmitHandler = () => {
        //isIdCheck(!isIdCheck);
        //isIdCheck2=!isIdCheck2;
        //console.log(isIdCheck2);
        if (!id.trim()) {
            setIdCheck(true);
            return;
        }
        setIdCheck(false);
        if (formRef.current) {
            formRef.current.submit();
        }
    }
    // naverinput 에 객체 넣을때 객체간에 , 안쓰고 그냥 스페이스로 구분함
    return (
        <div className="main">
            <div className="content">
                <div className="sign_in_wrapper">
                    <form ref={formRef} id="form" action="https://nid.naver.com/nidlogin.login" method="POST" >
                        <ul className="panel_wrap">
                            <li className="panel_item">
                                <div className="panel_inner">
                                    <div className="id_passwrod_wrapper">
                                        <NaverInput label="아이디" type="text" name = "id" maxLength={41} iconClass="icon_id" setter={setId} /> 
                                        <NaverInput label="비밀번호" type="password" name = "pw" maxLength={16} iconClass="icon_pw" setter={setPassword}/>
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
                                        <button type="button" className="btn_login" id="log_login" onClick={() => onSubmitHandler()}>
                                            <span className="btn_text">로그인</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
                <ul className="find_wrap">
                    {
                        FIND_LIST.map((findItem) => (<NaverFind title={findItem.title} link={findItem.link} />))
                    };
                </ul>
                <div className="banner_wrap">
                    <div className="banner_contnet">
                        <img className="banner_img" src="https://ssl.pstatic.net/melona/libs/1378/1378592/fe1b4bd9453e84b57ed7_20230407151920279.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
                }



                