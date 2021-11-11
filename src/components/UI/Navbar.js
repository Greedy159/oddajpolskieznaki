import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import image from "../Images/PalHajs.jfif"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{" "}
          Pal hajs ciulu! Jestę programerę!
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
