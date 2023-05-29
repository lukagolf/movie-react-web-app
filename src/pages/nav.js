import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileBtn from "../ui-styling/buttons/icons/profileBtn";
import SearchBtn from "../ui-styling/buttons/icons/searchBtn";

function MyNav() {
    return (
        <Navbar fluid>
            <Nav className="container-fluid ps-5 pe-5">
                <Nav.Item>
                    <Navbar.Brand as={Link} to="/home">Cinescope</Navbar.Brand>
                </Nav.Item>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Item>
                    <Nav.Link as={Link} to="/search"><SearchBtn /></Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link as={Link} to="/profile"><ProfileBtn /></Nav.Link>
                </Nav.Item>
                </Navbar.Collapse>
            </Nav>
        </Navbar>
    );
}
export default MyNav;
