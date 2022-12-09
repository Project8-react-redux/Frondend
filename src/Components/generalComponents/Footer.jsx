import { Link } from "react-router-dom";




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
                                    /{"{"}" "{"}"}
                                </div>
                                <ul>
                                    <li>
                                        <i className="fa fa-envelope" /> Info.colorlib@gmail.com
                                    </li>
                                    <li>
                                        <i className="fa fa-copy" /> +(12) 345 6789 10
                                    </li>
                                    <li>
                                        <i className="fa fa-thumb-tack" /> 40 Baria Sreet 133/2
                                        New York City, United State
                                    </li>
                                </ul>
                                <div className="fs-social">
                                    <Link to={''}>
                                        <i className="fa fa-facebook" />
                                    </Link>
                                    <Link to={''}>
                                        <i className="fa fa-twitter" />
                                    </Link>
                                    <Link to={''}>
                                        <i className="fa fa-tumblr" />
                                    </Link>
                                    <Link to={''}>
                                        <i className="fa fa-linkedin" />
                                    </Link>
                                    <Link to={''}>
                                        <i className="fa fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-1">
                            <div className="fs-widget">
                                <h4>Top Club</h4>
                                <ul className="fw-links">
                                    <li>
                                        <Link to={''}>Brazil</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Germany</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Italy</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Argentina</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>France</Link>
                                    </li>
                                </ul>
                                <ul className="fw-links">
                                    <li>
                                        <Link to={''}>England</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Netherlands</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Hungary</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Croatia</Link>
                                    </li>
                                    <li>
                                        <Link to={''}>Poland</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="fs-widget">
                                <h4>Recent News</h4>
                                <div className="fw-item">
                                    <h5>
                                        <Link to={''}>
                                            England win shows they have the spark to go far at World
                                            Cup
                                        </Link>
                                    </h5>
                                    <ul>
                                        <li>
                                            <i className="fa fa-calendar" /> May 19, 2019
                                        </li>
                                        <li>
                                            <i className="fa fa-edit" /> 3 Comment
                                        </li>
                                    </ul>
                                </div>
                                <div className="fw-item">
                                    <h5>
                                        <Link to={''}>
                                            Sri Lanka v Australia: Cricket World Cup 2019 – live!
                                        </Link>
                                    </h5>
                                    <ul>
                                        <li>
                                            <i className="fa fa-calendar" /> May 19, 2019
                                        </li>
                                        <li>
                                            <i className="fa fa-edit" /> 3 Comment
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-option">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="co-text">
                                    <p>
                                        can't be removed. Template is licensed under CC BY 3.0.
                                        Copyright ©
                                        All rights reserved | This template is made with
                                        <i id="footer-text" className="fa fa-heart" aria-hidden="true" /> by
                                        <Link to={"https://colorlib.com"} target="_blank">
                                            Orange Coding Academy/Group One
                                        </Link>
                                    </p>
                                </div>
                                <div className="co-widget">
                                    <ul>
                                        <li>
                                            <Link to={''}>Copyright notification</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Terms of Use</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>Privacy Policy</Link>
                                        </li>
                                    </ul>
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