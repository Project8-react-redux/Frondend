import React, { useState } from "react";
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
import { Link } from "react-router-dom";

function Login() {
  const [credential, seCredential] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    seCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative "
        style={{
          backgroundImage:
            'URL("https://th.bing.com/th/id/OIP.sFFidat51xLQ90mnLkDbHwHaFj?pid=ImgDet&w=640&h=480&rs=1")',
          backgroundSize: "cover",
        }}
      >
        <div class="overlay">
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
        <MDBRow className="justify-content-around me-md-4">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <div
              style={{ backgroundColor: "#0000008f", zIndex: 1 }}
              className="rounded-5 text-center"
            >
              <h3 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
                Happy to see you again, Log In!
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="text-center mb-3">
                  {/*  <img src={logo} height="60" alt="" loading="lazy" />*/}
                  <h5 className="mt-3 m-0">Welcome Agin </h5>
                </div>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {
                  // !loading ? (
                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    /*    onClick={handleSubmit}*/
                  >
                    Login
                  </MDBBtn>
                  // ) : (
                  //   <MDBBtn
                  //     className="w-100 mb-2"
                  //     size="md"
                  //     color="dark"
                  //     disabled
                  //   >
                  //     <span
                  //       class="spinner-border spinner-border-sm text-light"
                  //       role="status"
                  //       aria-hidden="true"
                  //     ></span>
                  //     Loading...
                  //   </MDBBtn>
                  // )
                }
                <p className="text-center mb-1">or </p>
                <MDBBtn className="w-100 mb-2" size="md" color="dark">
                  Login with <ImGoogle />
                </MDBBtn>
                <div className="text-center mt-4">
                  you don't have account ?
                  <Link className="text-dark" to="/register">
                    Register
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
