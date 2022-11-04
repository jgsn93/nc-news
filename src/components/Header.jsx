import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ user }) => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <img style={{ maxWidth: "100%" }} src={logo} alt="logo"></img>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ marginLeft: "50px", maxWidth: "100%" }}>
              Signed in as: {user}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
