import React from "react";
import "../ui-styling/index.css"
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileBtn from "../ui-styling/buttons/icons/profileBtn";
import SearchBtn from "../ui-styling/buttons/icons/searchBtn";
import WhiteTextBtn from "../ui-styling/buttons/text/whiteTextBtn";

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
              <SearchBtn />
            </Nav.Item>
          ) : (
            ""
          )}
          {options.profile ? (
            <Nav.Item>
              <ProfileBtn />
            </Nav.Item>
          ) : (
            ""
          )}
          {options.signIn ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                <WhiteTextBtn text={"Sign In"} />
              </Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
          {options.signOut ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                <WhiteTextBtn text={"Sign Out"} />
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
