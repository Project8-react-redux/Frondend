import React from "react";
import { Link } from "react-router-dom";
import Post from "./Posts";

export const AllPosts = () => {
  return (
    <>
      <section className="popular-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-4">
              {/* <Post />
              <Post />
              <Post />
              <Post /> */}
            </div>

            <div className="col-lg-4 my-5">
              <div
                className="news-item popular-item set-bg"
                data-setbg="img/news/popular-b.jpg"
              >
                <div className="ni-tag tenis">Tenis</div>
                <div className="ni-text">
                  <h5>
                    <Link to={""}>
                      England reach World Cup last 16 with hard-fought win over
                      Argentina
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
              <div
                className="news-item popular-item set-bg"
                data-setbg="img/news/popular-b.jpg"
              >
                <div className="ni-tag tenis">Tenis</div>
                <div className="ni-text">
                  <h5>
                    <Link to={""}>
                      England reach World Cup last 16 with hard-fought win over
                      Argentina
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
              <div
                className="news-item popular-item set-bg"
                data-setbg="img/news/popular-b.jpg"
              >
                <div className="ni-tag tenis">Tenis</div>
                <div className="ni-text">
                  <h5>
                    <Link to={""}>
                      England reach World Cup last 16 with hard-fought win over
                      Argentina
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
              <div
                className="news-item popular-item set-bg"
                data-setbg="img/news/popular-b.jpg"
              >
                <div className="ni-tag tenis">Tenis</div>
                <div className="ni-text">
                  <h5>
                    <Link to={""}>
                      England reach World Cup last 16 with hard-fought win over
                      Argentina
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
      </section>
    </>
  );
};
