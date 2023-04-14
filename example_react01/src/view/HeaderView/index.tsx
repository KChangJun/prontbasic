import React from 'react'

export default function Header() {
    return (


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

    );
}


//export 요소 하나만 내보냄. 요소가 여러개기 때문에 정해진 이름으로 보내고 받아야함.

//export default 요소 하나만 보내는데 뭘 보낼지 정해져잇어서 그냥 파일경로만 해도 상관없음. 거기다 뭘 받는지 정해져있기때문에 다름이름으로해도 상관없음