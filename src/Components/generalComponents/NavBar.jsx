import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../asset/logo.png";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const auth = useAuthUser();

  return (
    <MDBNavbar expand="lg" light sticky style={{ backgroundColor: "#751f4a" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img src={logo} height="40" alt="" loading="lazy" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-center">
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/shops" className="text-white">
                  Shops
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/joinUs" className="text-white">
                  Join Us
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/contact" className="text-white">
                  Contact
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav
            className="justify-content-end align-items-center flex-row "
            style={{ flexBasis: "20%" }}
          >
            {!isAuthenticated() ? (
              <Link to="/login">
                <MDBBtn color="dark">
                  Login
                  <MDBIcon fas icon="sign-in-alt" />
                </MDBBtn>
              </Link>
            ) : (
              <MDBNavbarItem className="px-3">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <img src={auth().user.profileImage} alt="" width="40px" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className="py-2 px-3 ">
                      <Link to="/profile" className="text-dark">
                        View Profile
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      className="py-2 px-3 text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        signOut();
                        navigate("/", { replace: true });
                      }}
                    >
                      Logout
                      <MDBIcon fas icon="sign-out-alt" />
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
