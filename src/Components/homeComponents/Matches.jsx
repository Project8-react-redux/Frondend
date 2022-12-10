import { useEffect, useState, React } from "react";
import NextMatches from "./NextMatches";
import RecentMatches from "./RecentMatches";
import { useSelector, useDispatch } from "react-redux";
import { Countries, saveChange } from "../../Reducers/MatchesReducer";
import "./matches.css";
import Spinner from "../generalComponents/spinner";
import { Link } from "react-router-dom";
import { Leagues } from "../../Reducers/MatchesReducer";

const Matches = () => {
  //dipatch all countries || read all countries
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.matches.filterData);

  useEffect(() => {
    dispatch(Countries());
  }, []);
  //=====================

  //set state to store the current country id and to dispatch the leagues depend on it .
  const [currentCountryId, setCurrentCountryId] = useState("");
  function changeIdState(id) {
    setCurrentCountryId(id);
    document.getElementById("leagues").style.display = "inline";
    document.getElementById("date").style.display = "inline";
  }
  useEffect(() => {
    dispatch(Leagues());
  }, [currentCountryId]);
  const allLeagues = useSelector((state) => state.matches.leagues);
  const filterdLeagues = allLeagues.filter(
    (e) => e.country_id == currentCountryId
  );
  //=====================

  // matches details ===============

  // get today's date to set it as the default value of the from input
  const [dateAndLeague, setDateAndLeague] = useState({
    from: "",
    To: "",
    leagueId: "",
  });
  let fromDate = new Date().toJSON().slice(0, 10);

  let getDate = new Date();
  let day = getDate.getDate() + 7;
  let month = getDate.getMonth();
  let year = getDate.getFullYear();
  let toDate = `${day}-${month}-${year}`;

  // set the league id to the date and league state
  function handeLOnChange(e) {
    setDateAndLeague((prevs) => ({
      ...prevs,
      [e.target.name]: e.target.value,
    }));
  }
  console.log("it reaches it");

  console.log(dateAndLeague);

  if (Countries.length == 0) {
    return <Spinner />;
  }
  return (
    <>
      <section
        className="match-section set-bg"
        data-setbg="img/match/match-bg.jpg"
      >
        <div className="container">
          <div className="bg-light d-flex align-items-center flex-wrap gap-2">
            <div class="dropdown">
              <button onClick={() => myFunction()} class="dropbtn">
                Select City
              </button>
              <div id="myDropdown" class="dropdown-content">
                <input
                  className="pointer"
                  type="text"
                  placeholder="Search.."
                  id="myInput"
                  onChange={(element) =>
                    dispatch(saveChange(element.target.value))
                  }
                />
                {allCountries.slice(2, 12)?.map((element) => {
                  console.log(element.country_id);
                  return (
                    <div className="search">
                      <p onClick={() => changeIdState(element.country_id)}>
                        <img
                          width={"100px"}
                          height={"50px"}
                          src={element.country_logo}
                          alt=""
                        />
                        {element.country_name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-4">
              <select
                className="col-md-8"
                id="leagues"
                name="leagueId"
                onChange={handeLOnChange}
              >
                <option>--Select a league--</option>
                {filterdLeagues.map((league) => {
                  return (
                    <option value={league.league_id}>
                      {league.league_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-4" id="date">
              <form action="">
                <label for="start">From:</label>
                <input
                  min={fromDate}
                  name="from"
                  value={dateAndLeague.from}
                  onChange={handeLOnChange}
                  type="date"
                  id="start"
                />

                <label for="end">To:</label>
                <input
                  min={fromDate}
                  max={toDate}
                  value={dateAndLeague.To}
                  onChange={handeLOnChange}
                  type="date"
                  name="To"
                  id="end"
                />
              </form>
            </div>
          </div>
          <div className="row">
            <RecentMatches />
            <NextMatches />
          </div>
        </div>
      </section>
    </>
  );

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.querySelectorAll("div.search");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
};

export default Matches;
