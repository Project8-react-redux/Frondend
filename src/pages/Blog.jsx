import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useJquery } from "../hooks/useJquery";

function Blog(props) {
  const { reloadJquery } = useJquery();
  useEffect(() => {
    reloadJquery();
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-text">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 left-blog-pad">
              <div
                className="large-blog set-bg"
                data-setbg="img/blog/blog-1.jpg"
              >
                <div className="bi-tag">Soccer</div>
                <div className="bi-text">
                  <h3>
                    <Link to="/NewsDetailes/30">
                      England Women 1-0 Argentina Women: Taylor guarantees
                      Lionesses' path to last 16
                    </Link>
                  </h3>
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
              <div className="blog-items">
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-2.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <Link to="/NewsDetailes/20">
                        Jodie Taylor celebrates her first goal of the tournament
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-3.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <Link to="/NewsDetailes/10">
                        Vanina Correa keeps out Nikita Parris' first-half
                        penalty
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-4.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="#">
                        Derby will demand £4m for Lampard next year
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-5.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="#">
                        Virgil van Dijk says Liverpool are hungry for more
                        success
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
              </div>
              <div className="more-blog">
                <a href="#">
                  <i className="fa fa-long-arrow-left" /> Older post
                </a>
                <a href="#">
                  Newer post <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-sidebar">
                <div className="bs-recent">
                  <div className="section-title sidebar-title">
                    <h5>Recent Post</h5>
                  </div>
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-1.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">How To Quit Smoking Using Zyban</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-2.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Decorate For Less With Art Posters</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-3.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Home Business Advertising Ideas</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-4.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Lasik Doesn T Stop Your Eyes From Aging</a>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
