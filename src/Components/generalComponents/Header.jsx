import { Link } from "react-router-dom";
import { AiFillTwitterCircle} from 'react-icons/ai/';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";







const Header = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



    return (

        <>

            {/*start header and nav bar ======================================*/}
            {/* <div className="offcanvas-menu-overlay" /> */}
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="fa fa-close" />

                </div>
              </div>
              <div className="col-lg-6">
                <div className="ht-links">
                  <Link to={""}>
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to={""}>
                    <i className="fa fa-vimeo" />
                  </Link>
                  <Link to={""}>
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to={""}>
                    <i className="fa fa-google-plus" />
                  </Link>
                  <Link to={""}>
                    <i className="fa fa-instagram" />
                  </Link>
                </div>

                <div className="header__top--canvas">
                    <div className="ht-info">
                        <ul>
                            <li> {date}
</li>
                            <li>
                                <Link to={'login'}>Sign in</Link>
                            </li>
                            <li>
                                <Link to={'register'}>Register</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ht-links">
                    <a href={'/https://www.facebook.com/HAYYA-107115075582816'}> 
                                    < GrFacebookOption/> </a>
                                    <a href={'https://www.linkedin.com/company/hayya/?viewAsMember=true'}>
                                    < AiFillLinkedin /></a>
                                  
                                    <a href={'https://twitter.com/jardat_rama'}>
                                    <AiFillTwitterCircle /> </a>
                                    <a href={'https://www.youtube.com/@hayya3947'}>
                                    <AiOutlineYoutube /></a>
                    </div>

                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <ul className="main-menu m-0">
                    <li className="active ">
                      <Link to={""}>Home</Link>
                    </li>
                    <li>
                      <Link to={""}>Club</Link>
                    </li>
                    <li>
                      <Link to={""}>Schedule</Link>
                    </li>
                    <li>
                      <Link to={""}>Results</Link>
                    </li>
                    <li>


                        <Link to={'/Contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/Profile'}>Profile</Link>
                        <ul className="dropdown">
                            <li>
                                <Link to={''}>Logout</Link>
                            </li>
                           
                           
                        </ul>
                    </li>

                </ul>
                <div id="mobile-menu-wrap" />
            </div>

            <header className="header-section">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ht-info">
                                    <ul>
                                        <li> {date}
</li>
                                        <li>
                                            <Link to={'login'}>Sign in</Link>

                                        </li>

                                        <li>
                                            <Link to={'register'}>Register</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ht-links">
                                <a href={'/https://www.facebook.com/HAYYA-107115075582816'}> 
                                    < GrFacebookOption/> </a>
                                    <a href={'https://www.linkedin.com/company/hayya/?viewAsMember=true'}>
                                    < AiFillLinkedin /></a>
                                  
                                    <a href={'https://twitter.com/jardat_rama'}>
                                    <AiFillTwitterCircle /> </a>
                                    <a href={'https://www.youtube.com/@hayya3947'}>
                                    <AiOutlineYoutube /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link to={''}>
                                        <img src="img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="nav-menu">
                                    <ul className="main-menu">
                                        <li className="active">
                                            <Link to={''}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={'/Blog'}>News</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Review</Link>
                                        </li>
                                       
                                       
                                       
                                        <li>
                                            <Link to={'/About'}>About us</Link>
                                        </li>
                                        <li>
                                            <Link to={'Contact'}>Contact Us</Link>
                                        </li>

                                        <li>
                        <Link to={'/Profile'}>Profile</Link>
                        <ul className="dropdown">
                            <li>
                                <Link to={''}>Logout</Link>
                            </li>
                           
                           
                        </ul>
                    </li>
                                    </ul>
                                    {/* <div className="nm-right search-switch">
                                        <i className="fa fa-search" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="canvas-open">
                            <i className="fa fa-bars" />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default Header;

