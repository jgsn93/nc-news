import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AllArticlesButtons = () => {
  const btnGrpStyle = {
    margin: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  };

  return (
    <>
      <ButtonGroup style={btnGrpStyle}>
        <LinkContainer to="/articles/all">
          <Button variant="success" value="">
            All
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/cooking">
          <Button variant="warning" value="cooking">
            Cooking
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/coding">
          <Button variant="info" value="coding">
            Coding
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/football">
          <Button variant="danger" value="football">
            Football
          </Button>
        </LinkContainer>
      </ButtonGroup>
    </>
  );
};

export default AllArticlesButtons;
