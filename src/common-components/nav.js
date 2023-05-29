import React from "react";
import "../ui-styling/index.css"
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileBtn from "../ui-styling/buttons/icons/profileBtn";
import SearchBtn from "../ui-styling/buttons/icons/searchBtn";
import SignInBtn from "../ui-styling/buttons/text/signInBtn";
import SignOutBtn from "../ui-styling/buttons/text/signOutBtn";

function MyNav({
  options = {
    homePage: false,
    search: true,
    signIn: true,
    profile: false,
    signOut: false,
  },
}) {
  return (
    <Navbar fluid>
      <Nav className="container-fluid ps-5 pe-5">
        <Nav.Item>
          <Navbar.Brand as={Link} to="/home">
            {options.homePage ? (
              <h2 className="d-inline wd-whiteText">CineScope</h2>
            ) : (
              <h2 className="d-inline wd-purpleText">CineScope</h2>
            )}
          </Navbar.Brand>
        </Nav.Item>
        <Navbar.Collapse className="justify-content-end">
          {options.search ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/search">
                <SearchBtn />
              </Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
          {options.profile ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/profile">
                <ProfileBtn />
              </Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
          {options.signIn ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/signIn">
                <SignInBtn />
              </Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
          {options.signOut ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                <SignOutBtn />
              </Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}
export default MyNav;
