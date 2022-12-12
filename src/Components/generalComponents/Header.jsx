import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/*start header and nav bar ======================================*/}
      {/* <div className="offcanvas-menu-overlay" /> */}
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close" />
        </div>
        <div className="search-btn search-switch">
          <i className="fa fa-search" />
        </div>
        <div className="header__top--canvas">
          <div className="ht-info">
            <ul>
              <li>20:00 - May 19, 2019</li>
              <li>
                <Link to={"#"}>Sign in</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ht-links">
            <Link to={"#"}>
              <i className="fa fa-facebook" />
            </Link>
            <Link to={"#"}>
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
        </div>
        <ul className="main-menu mobile-menu">
          <li className="active">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={""}>Club</Link>
          </li>
          <li>
            <Link to="">Schedule</Link>
          </li>
          <li>
            <Link to={""}>Results</Link>
          </li>

          <li>
            <Link to={"/Contact"}>Contact Us</Link>
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
                    <li>20:00 - May 19, 2019</li>
                    <li>
                      <Link to={""}>Sign in</Link>
                    </li>

                    <li>
                      <Link to={"/Contact"}>Contact</Link>
                    </li>
                  </ul>
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
              </div>
            </div>
          </div>
        </div>
        <div className="header__nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <Link to={""}>
                    <img src="img/logo.png" alt="" />
                  </Link>
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
                      <Link to={"/About"}>About us</Link>
                    </li>
                    <li>
                      <Link to={"Contact"}>Contact Us</Link>
                    </li>
                  </ul>
                  <div className="nm-right search-switch">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas-open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </div>
      </header>
      {/* end of header and nav bar */}
    </>
  );
};
export default Header;
