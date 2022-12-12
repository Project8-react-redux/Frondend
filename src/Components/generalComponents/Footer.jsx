import { Link } from "react-router-dom";

import { AiFillTwitterCircle} from 'react-icons/ai/';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {


    return (
        <>
            {/* footer */}
            <footer className="footer-section set-bg" data-setbg="img/footer-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="fs-logo">
                                <div className="logo">
                                    <Link to={''}>
                                        <img src="img/logo.png" alt="" />
                                    </Link>
                                </div>
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope" /> hayya@gmail.com
                                    </li>
                                    <li>
                                        <i className="fa fa-copy" /> +(962) 778084901
                                    </li>
                                    <li>
                                        <i className="fa fa-thumb-tack" /> Jordan , Amman
                                    </li>
                                </ul>
                                <div className="fs-social">
                                    <a href={'/https://www.facebook.com/HAYYA-107115075582816'}> 
                                    < GrFacebookOption/>                                        </a>
                                    <a href={'https://www.linkedin.com/company/hayya/?viewAsMember=true'}>
                                    < AiFillLinkedin />                                    </a>
                                  
                                    <a href={'https://twitter.com/jardat_rama'}>
                                    <AiFillTwitterCircle /> 
                                                                         </a>
                                    <a href={'https://www.youtube.com/@hayya3947'}>
                                    <AiOutlineYoutube />                                     </a>
                                </div>
                            </div>
                        </div>
            
                       
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-option">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="co-text text-center">
                                    <p>
                                        Copyright © All rights reserved | This Website is made with
                                        <i id="footer-text" className="fa fa-heart" aria-hidden="true" /> by
                                      
                                            Orange Coding Academy/Group One
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer */}
        </>
    )

}
export default Footer;