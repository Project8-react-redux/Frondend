



const Videos = () => {

    return (
        <>
            {/* start vedios section */}
            <section className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3>
                                    Hot <span>Videos</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="video-slider owl-carousel">
                            <div className="col-lg-3">
                                <div
                                    className="video-item set-bg"
                                    data-setbg="img/videos/video-1.jpg"
                                >
                                    <div className="vi-title">
                                        <h5>A World Of Infinite Opportunities</h5>
                                    </div>
                                    <a
                                        href="https://www.youtube.com/watch?v=dhYOPzcsbGM"
                                        className="play-btn video-popup"
                                    >
                                        <img src="img/videos/play.png" alt="" />
                                    </a>
                                    <div className="vi-time">11:13</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    className="video-item set-bg"
                                    data-setbg="img/videos/video-2.jpg"
                                >
                                    <div className="vi-title">
                                        <h5>Video Games Playing With Imagination</h5>
                                    </div>
                                    <a
                                        href="https://www.youtube.com/watch?v=dhYOPzcsbGM"
                                        className="play-btn video-popup"
                                    >
                                        <img src="img/videos/play.png" alt="" />
                                    </a>
                                    <div className="vi-time">11:13</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    className="video-item set-bg"
                                    data-setbg="img/videos/video-3.jpg"
                                >
                                    <div className="vi-title">
                                        <h5>Home Audio Recording For Everyone</h5>
                                    </div>
                                    <a
                                        href="https://www.youtube.com/watch?v=dhYOPzcsbGM"
                                        className="play-btn video-popup"
                                    >
                                        <img src="img/videos/play.png" alt="" />
                                    </a>
                                    <div className="vi-time">11:13</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    className="video-item set-bg"
                                    data-setbg="img/videos/video-4.jpg"
                                >
                                    <div className="vi-title">
                                        <h5>What If They Let You Run The Hubble</h5>
                                    </div>
                                    <a
                                        href="https://www.youtube.com/watch?v=dhYOPzcsbGM"
                                        className="play-btn video-popup"
                                    >
                                        <img src="img/videos/play.png" alt="" />
                                    </a>
                                    <div className="vi-time">11:13</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div
                                    className="video-item set-bg"
                                    data-setbg="img/videos/video-4.jpg"
                                >
                                    <div className="vi-title">
                                        <h5>What If They Let You Run The Hubble</h5>
                                    </div>
                                    <a
                                        href="https://www.youtube.com/watch?v=dhYOPzcsbGM"
                                        className="play-btn video-popup"
                                    >
                                        <img src="img/videos/play.png" alt="" />
                                    </a>
                                    <div className="vi-time">11:13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end vedios section */}

        </>
    )

}
export default Videos;