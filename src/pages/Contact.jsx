import React, { useEffect, useState } from "react";
import axios from "axios";







export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [massage, setMassage] = useState('')

  const send = (e) => {
    e.preventDefault()
    const contact = {
      name: name,
      email: email,
      massage: massage
    }

    axios.post("http://127.0.0.1:8000/api/contact", contact)

    setName("")
    setEmail("")
    setMassage("")
  }
  return (
    <>
      {/* Contact Section Begin */}
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form">
                <h2>Contact Form</h2>
                <form onSubmit={send}>
                  <div className="group-in">
                    <label htmlFor="name">Name</label>
                    <input value={name} type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="group-in">
                    <label htmlFor="email">Email</label>
                    <input value={email} type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="group-in">
                    <label htmlFor="massage">Massage</label>
                    <textarea value={massage} id="massage" name="massage" onChange={(e) => setMassage(e.target.value)} />
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
