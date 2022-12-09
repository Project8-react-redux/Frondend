import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ImGoogle } from "react-icons/im";

// import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setUserInfo((pervs) => ({ ...pervs, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://th.bing.com/th/id/OIP.sFFidat51xLQ90mnLkDbHwHaFj?pid=ImgDet&w=640&h=480&rs=1")',
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div
            className="position-absolute "
            style={{
              backgroundColor: "#00000069",

              height: "100%",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
        </div>
        <MDBRow className="justify-content-around">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <div
              style={{ backgroundColor: "#0000008f", zIndex: 1 }}
              className="rounded-5 text-center"
            >
              <h3 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
                What you are waiting for? Join Us
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <form
              onSubmit={(e) => {
                // handleRegister(e)
              }}
            >
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-5">
                    {/*     <img src={logo} height="60" alt="" loading="lazy" />*/}
                  </div>
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        name="first_name"
                        id="form1"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        name="last_name"
                        id="form1"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>

                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </div>

                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Confirm Password"
                        type="password"
                        name="password_confirmation"
                        onChange={handleOnChange}
                      />
                    </div>
                  </MDBRow>

                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up
                  </MDBBtn>

                  <p className="text-center mb-1">or </p>
                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    onClick={(e) => {
                      //   handleRegister(e);
                    }}
                  >
                    sign up with <ImGoogle />
                  </MDBBtn>
                  <div className="text-center mt-4">
                    do you have account ?
                    <Link className="text-dark" to="/login">
                      Login
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Register;
