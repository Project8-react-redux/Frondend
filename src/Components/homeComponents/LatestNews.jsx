import { Link } from "react-router-dom"



const LastesNews = () => {

  return (
    <>
      {/* start Latest News */}
      <section className="latest-section">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title latest-title">
                <h3>
                  Latest <span>News</span>
                </h3>
                <ul>
                  <li>All</li>
                  <li>World Cup</li>
                  <li>Champions</li>
                  <li>MLS</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="news-item left-news">
                    <div
                      className="ni-pic set-bg"
                      data-setbg="img/news/latest-b.jpg"
                    >
                      <div className="ni-tag">Soccer</div>
                    </div>
                    <div className="ni-text">
                      <h4>
                        <Link to={''}>
                          Once You Learn These Hard Truths About Life, You'll
                          Become
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
                        their New Years Resolutions. Usually they involve,
                        losing weight, quitting smoking, and joining a gym,
                        just to mention a few.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-1.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <Link to={''}>How To Quit Smoking Using Zyban</Link>
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
                        <Link to={''}>Decorate For Less With Art Posters</Link>
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
                        <Link to={''}>Home Business Advertising Ideas</Link>
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
                        <Link to={''}>
                          Lasik Doesn T Stop Your Eyes From Aging
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
            <div className="col-lg-4">
              <div className="section-title">
                <h3>
                  Club <span>Ranking</span>
                </h3>
              </div>
              <div className="points-table">
                <table>
                  <thead>
                    <tr>
                      <th className="th-o">Pos</th>
                      <th>Team</th>
                      <th className="th-o">P</th>
                      <th className="th-o">W</th>
                      <th className="th-o">L</th>
                      <th className="th-o">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="team-name">
                        <img src="img/flag/flag-1.jpg" alt="" />
                        <span>Afghanis</span>
                      </td>
                      <td>22</td>
                      <td>2</td>
                      <td>5</td>
                      <td>72</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="team-name">
                        <img src="img/flag/flag-2.jpg" alt="" />
                        <span>Australia</span>
                      </td>
                      <td>20</td>
                      <td>3</td>
                      <td>4</td>
                      <td>71</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="team-name">
                        <img src="img/flag/flag-3.jpg" alt="" />
                        <span>Qatar</span>
                      </td>
                      <td>18</td>
                      <td>4</td>
                      <td>4</td>
                      <td>68</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="team-name">
                        <img src="img/flag/flag-4.jpg" alt="" />
                        <span>Cambodia</span>
                      </td>
                      <td>17</td>
                      <td>2</td>
                      <td>7</td>
                      <td>64</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="team-name">
                        <img src="img/flag/flag-5.jpg" alt="" />
                        <span>Uzbekistan</span>
                      </td>
                      <td>17</td>
                      <td>2</td>
                      <td>6</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="team-name">
                        <img src="img/flag/flag-6.jpg" alt="" />
                        <span>Turkme</span>
                      </td>
                      <td>161</td>
                      <td>1</td>
                      <td>8</td>
                      <td>57</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="team-name">
                        <img src="img/flag/flag-7.jpg" alt="" />
                        <span>Sri Lanka</span>
                      </td>
                      <td>15</td>
                      <td>4</td>
                      <td>8</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td className="team-name">
                        <img src="img/flag/flag-8.jpg" alt="" />
                        <span>Myanmar</span>
                      </td>
                      <td>14</td>
                      <td>3</td>
                      <td>7</td>
                      <td>48</td>
                    </tr>
                  </tbody>
                </table>
                <Link to={''} className="p-all">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end latest news */}
    </>
  )
}

export default LastesNews;