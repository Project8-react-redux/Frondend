



const TrendingNews = () => {


    return (
        <>

            {/* treding news (slider)======================== */}
            <div className="trending-news-section">
                <div className="container">
                    <div className="tn-title">
                        <i className="fa fa-caret-right" /> Trending News
                    </div>
                    <div className="news-slider owl-carousel">
                        <div className="nt-item ms-3">
                         The latest football news you can find in our page
                        </div>
                        <div className="nt-item ms-3">
                            Fifa world cup is about to finish who will be the Hero !!
                        </div>
                    </div>
                </div>
            </div>
            {/* trending news end============================= */}

        </>
    )
}

export default TrendingNews;