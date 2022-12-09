import React from "react";


export const ContactForm = () => {
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
                We’re here to help and answer any question you might have.<br></br> We look forward to hearing from you.
                </p>
                <div className="ci-address">
                  <h5>Amman </h5>
                  <ul>
                    <li>Wasfi Altall St. Jordan Amman</li>
                    <li>+962778084901</li>
                    <li>info@gmail.com </li>
                  </ul>
                </div>
                <div className="ci-address">
                  <h5>Irbid</h5>
                  <ul>
                    <li>Jordan Irbid</li>
                    <li>+962778084596</li>
                    <li>info2.@gmail.com </li>
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
