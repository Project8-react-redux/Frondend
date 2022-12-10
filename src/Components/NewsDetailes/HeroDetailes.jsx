import React from "react";

function HeroDetailes({ articleDetail }) {
  return (
    <div>
      <>
        <section
          className="blog-hero-section "
          style={{
            backgroundImage: `url(${articleDetail.media})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          data-setbg="img/blog/details/details-1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="bh-text"
                  style={{ backgroundColor: `#0000009c` }}
                >
                  <h2>
                    England Women 1-0 Argentina Women: Jodie Taylor guarantees
                    Lionesses
                  </h2>
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
        </section>
      </>
    </div>
  );
}

export default HeroDetailes;
