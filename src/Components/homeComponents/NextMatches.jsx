


const NextMatches = ({ nextMatches }) => {

    console.log(nextMatches);
    let nextmatch = nextMatches?.slice(0, 3);

    return (

        <>

            {/* next matches and recent matches component */}

            <div className="col-lg-6">

                <div className="ms-content">
                    <h4>Next Match</h4>
                    <div className="mc-table">
                        <table>
                            <tbody>
                                {nextmatch ? (nextmatch.map((match) => {
                                    console.log(match.match_id);
                                    return (
                                        <>
                                            <tr key={match.match_id}>
                                                <td className="left-team">
                                                    <img src={match.team_home_badge} alt="" />
                                                    <h6>{match.match_hometeam_name}</h6>
                                                </td>
                                                <td className="mt-content">
                                                    <div className="mc-op">{match.match_hometeam_name} Vs {match.match_awayteam_name}</div>
                                                    <h4>VS</h4>
                                                    <div className="mc-op">{match.match_date}</div>
                                                </td>
                                                <td className="right-team">
                                                    <img src={match.team_away_badge} alt="" />
                                                    <h6>{match.match_awayteam_name}</h6>
                                                </td>
                                            </tr>
                                            <hr className="text-dark" />
                                        </>
                                    )
                                })) : (
                                    <h1>slecet a city and leagues to show the results</h1>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* end nex matches and  recent matches */}
        </>
    )
}
export default NextMatches;