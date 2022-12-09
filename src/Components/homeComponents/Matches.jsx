import NextMatches from './NextMatches';
import RecentMatches from './RecentMatches';


const Matches = () => {


    return (
        <>
            <section className="match-section set-bg" data-setbg="img/match/match-bg.jpg">
                <div className="container">
                    <div className="row">
                        <RecentMatches />
                        <NextMatches />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Matches;