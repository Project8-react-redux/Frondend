import { Link } from "react-router-dom";


const HeroSection = () => {


    return (

        <>

            {/* start of hero section and image  */}
            <section className="hero-section set-bg" data-setbg="img/hero/hero-1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hs-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="hs-text">
                                                <h4>30 september 2019 / 9:00 GMT+0000</h4>
                                                <h2>Airrosten VS Lerenort in London</h2>
                                                <Link className="primary-btn">
                                                    More Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of hero section and image */}

        </>
    )
}

export default HeroSection;