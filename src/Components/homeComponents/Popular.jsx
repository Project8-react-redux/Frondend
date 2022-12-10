import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../Reducers/ArticleReducer";

const Popular = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  //   console.log(articles);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  //   if (articles.Length === 0) return "loading...";

  return (
    <>
      {/* start popular section */}
      <section className="popular-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h3>
                  Popular <span>Post</span>
                </h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="news-item popular-item set-bg"
                    data-setbg="img/news/popular-b.jpg"
                  >
                    <div className="ni-tag tenis">Tenis</div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          England reach World Cup last 16 with hard-fought win
                          over Argentina
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-1.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          There’s a great history of the winner Sandia
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-2.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          It’ll be a tough game and a physical game
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-3.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          If we don’t score we can’t get frustrated
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
                <div className="col-md-6">
                  <div
                    className="news-item popular-item set-bg"
                    data-setbg="img/news/popular-b.jpg"
                  >
                    <div className="ni-tag football">Football</div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          We are playing history and Argentina at the World Cup,
                          says Phil Neville
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-5.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>
                          Le Havre does have a growing fan club
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-6.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>It will be hard to break them down</Link>
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
                      <img src="img/news/ln-7.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={""}>We’ve never seen them as organised </Link>
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
            <div className="col-lg-4">
              {/*<div className="section-title">
                <h3>
                  Follow <span>Us</span>
                </h3>
              </div>
              <div className="follow-links">
                <ul>
                  <li className="facebook">
                    <i className="fa fa-facebook" />
                    <div className="fl-name">Facebook</div>
                    <span className="fl-fan">2.530 Fans</span>
                  </li>
                  <li className="twitter">
                    <i className="fa fa-twitter" />
                    <div className="fl-name">Twitter</div>
                    <span className="fl-fan">2.046 Fans</span>
                  </li>
                  <li className="google">
                    <i className="fa fa-google" />
                    <div className="fl-name">Google</div>
                    <span className="fl-fan">1.170 Fans</span>
                  </li>
                </ul>
  </div>*/}
              {/*                      <div
                className="vote-option set-bg"
                data-setbg="img/news/vote-bg.jpg"
              >
                <div className="vo-text">
                  <h5>In your opinion, which country will win this year</h5>
                  <div className="vt-item">
                    <input type="radio" name="like-team" id="one" />
                    <label htmlFor="one">Germany</label>
                  </div>
                  <div className="vt-item">
                    <input type="radio" name="like-team" id="two" />
                    <label htmlFor="two">Brazil</label>
                  </div>
                  <div className="vt-item">
                    <input type="radio" name="like-team" id="three" />
                    <label htmlFor="three">Myanmar</label>
                  </div>
                  <div className="vt-item">
                    <input type="radio" name="like-team" id="four" />
                    <label htmlFor="four">Argentina</label>
                  </div>
                </div>
 </div>*/}
            </div>
          </div>
        </div>
      </section>
      {/* end popular seciton */}
    </>
  );
};
export default Popular;
