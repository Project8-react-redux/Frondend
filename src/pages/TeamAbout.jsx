import React from "react";

export const TeamAbout = () => {
  return (
    <>
      <>
        {/* Breadcrumb Section Begin */}
        <section
          className="breadcrumb-section set-bg"
          data-setbg="img/breadcrumb-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-text">
                  <h2>Club</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Club Section Begin */}
        <section className="club-section spad">
          <div className="container">
            <div className="club-content">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cc-pic">
                    <img src="img/club-logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cc-text">
                    <div className="ct-title">
                      <h3>Club Brazil</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.{" "}
                      </p>
                    </div>
                    <div className="ct-widget">
                      <ul>
                        <li>
                          <h5>Established</h5>
                          <p>Since 1987</p>
                        </li>
                        <li>
                          <h5>Former President</h5>
                          <p>John Martin</p>
                        </li>
                        <li>
                          <h5>A skipper</h5>
                          <p>Jack Hadison</p>
                        </li>
                        <li>
                          <h5>Total Matches</h5>
                          <p>78</p>
                        </li>
                        <li>
                          <h5>Location</h5>
                          <p>Brasilia, Brazil</p>
                        </li>
                        <li>
                          <h5>Social</h5>
                          <div className="cw-social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-youtube-play" />
                            </a>
                            <a href="#">
                              <i className="fa fa-google" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="club-tab-list">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                      >
                        Substitute
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        Midfielder
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        Forward
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-4"
                        role="tab"
                      >
                        Goalkeeper
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-5"
                        role="tab"
                      >
                        Sweeper
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="club-tab-content">
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-1.jpg" alt="" />
                            <h5>12. Buddy Peck</h5>
                          </div>
                          <div className="ci-name">Forward</div>
                        </div>
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-2.jpg" alt="" />
                            <h5>08. John Smith</h5>
                          </div>
                          <div className="ci-name">Defensive midfielder</div>
                        </div>
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-3.jpg" alt="" />
                            <h5>18. Hanry Edison</h5>
                          </div>
                          <div className="ci-name">Goalkeeper </div>
                        </div>
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-4.jpg" alt="" />
                            <h5>02. Frankie Diaz</h5>
                          </div>
                          <div className="ci-name">Central defender</div>
                        </div>
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-5.jpg" alt="" />
                            <h5>09. John Thompson</h5>
                          </div>
                          <div className="ci-name">Central midfielder</div>
                        </div>
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-6.jpg" alt="" />
                            <h5>22. Sara Mayer</h5>
                          </div>
                          <div className="ci-name">Defendef</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <div className="club-tab-content">
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-5.jpg" alt="" />
                            <h5>09. John Thompson</h5>
                          </div>
                          <div className="ci-name">Central midfielder</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                      <div className="club-tab-content">
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-1.jpg" alt="" />
                            <h5>12. Buddy Peck</h5>
                          </div>
                          <div className="ci-name">Forward</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                      <div className="club-tab-content">
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-3.jpg" alt="" />
                            <h5>18. Hanry Edison</h5>
                          </div>
                          <div className="ci-name">Goalkeeper </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-5" role="tabpanel">
                      <div className="club-tab-content">
                        <div className="ct-item">
                          <div className="ci-text">
                            <img src="img/club/p-1.jpg" alt="" />
                            <h5>12. Buddy Peck</h5>
                          </div>
                          <div className="ci-name">Forward</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Club Section End */}
      </>
    </>
  );
};
