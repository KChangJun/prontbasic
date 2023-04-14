import React from 'react'

export default function Footer() {
    return (
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



    );
}
