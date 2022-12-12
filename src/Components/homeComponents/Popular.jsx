import { Link } from "react-router-dom";
import "./matches.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getExpectation } from "../../Reducers/ExpectationReducer";
import { useJquery } from "../../hooks/useJquery";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { logDOM } from "@testing-library/react";
import { useAuthUser } from "react-auth-kit";
import { ImArrowUpRight2 } from "react-icons/im";
const Popular = () => {
  const auth = useAuthUser();
  const { reloadJquery } = useJquery();

  const [expectationData, setExpectationData] = useState({
    team_1: 0,
    team_2: 0,
    expectation_id: 0,
    user_id: 0,
  });

  const dispatch = useDispatch();
  const expectations = useSelector(
    (state) => state.expectationData.articlesData
  );

  useEffect(() => {
    dispatch(getExpectation());
  }, []);

  useEffect(() => {
    reloadJquery();
  });

  function handeLOnChange(e) {
    setExpectationData(() => ({
      ...expectationData,
      [e.target.name]: e.target.value,
    }));
  }
  function handelOnSubmit(id) {
    console.log(auth());
    const config = {
      method: "post",
      url: "http://localhost:8000/api/addExpectation",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        expect: `${expectationData.team_1}-${expectationData.team_2}`,
        expectation_id: id,
        user_id: auth().user.user_id,
      },
    };
    axios(config).then((response) => {
      console.log(response);
    });
  }
  console.log(expectationData);
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
                <div className="col-md-12">
                  <div>
                    <>
                      <div className="ms-content">
                        <h4>Next Match</h4>
                        <div className="mc-table ">
                          <table>
                            <tbody>
                              {expectations?.map((expectation) => {
                                return (
                                  <>
                                    <tr key={expectation.id}>
                                      <td className="left-team">
                                        <img
                                          src={expectation.team_2_picture}
                                          alt=""
                                        />
                                        <h6>{expectation.team_2}</h6>
                                        <div>
                                          <MDBInput
                                            label="Number input"
                                            id="typeNumber"
                                            type="number"
                                            name="team_2"
                                            onChange={handeLOnChange}
                                          />
                                        </div>
                                      </td>

                                      <td className="mt-content">
                                        <h4>VS</h4>
                                        <MDBBtn
                                          color="light"
                                          rippleColor="dark"
                                          type="button"
                                          onClick={() =>
                                            handelOnSubmit(expectation.id)
                                          }
                                        >
                                          Submit
                                        </MDBBtn>
                                      </td>
                                      <td className="left-team">
                                        <img
                                          src={expectation.team_1_picture}
                                          alt=""
                                        />
                                        <h6>{expectation.team_1}</h6>
                                        <div>
                                          <MDBInput
                                            label="Number input"
                                            id="typeNumber"
                                            type="number"
                                            className="me-3"
                                            name="team_1"
                                            onChange={handeLOnChange}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <hr className="text-dark" />
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
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
