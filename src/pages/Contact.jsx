import React from "react";

export const Contact = () => {
  return (
    <>
      {/* Contact Section Begin */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form">
                <h2>Contact Form</h2>
                <form action="#">
                  <div className="group-in">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="group-in">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                  </div>
                  <div className="group-in">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" defaultValue={""} />
                  </div>
                  <button type="submit">Submit Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                <h2>Contact Info</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a distribution
                  of letters.
                </p>
                <div className="ci-address">
                  <h5>New York Office</h5>
                  <ul>
                    <li>T8/480 Collins St, Melbourne VIC 3000, New York</li>
                    <li>1-234-567-89011</li>
                    <li>info.colorlib@gmail.com </li>
                  </ul>
                </div>
                <div className="ci-address">
                  <h5>Australia Office</h5>
                  <ul>
                    <li>Forrest Ray, 191-103 Integer Rd, Corona Australia</li>
                    <li>1-234-567-89011</li>
                    <li>info.colorlib@gmail.com </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};
