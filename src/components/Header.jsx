import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <img style={{ paddingRight: "50px" }} src={logo} alt="logo"></img>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: tickle122</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
