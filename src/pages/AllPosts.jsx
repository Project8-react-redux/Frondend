import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useJquery } from "../hooks/useJquery";
import { getPosts } from "../Reducers/PostReduser";
import PostINAll from "./PostINAll";
import $ from "jquery";
import { AddPost } from "../Components/profileComponents/AddPost";

export const AllPosts = () => {
  const { reloadJquery } = useJquery();
  const dispatch = useDispatch();
  useEffect(() => {
    reloadJquery();
  });
  const approved = useSelector((state) => state.postsData.postsData);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(approved);
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  return (
    <>
      <section className="popular-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-4">
              <AddPost />
              {approved.map((ele) => {
                return <PostINAll postData={ele} />;
              })}
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
