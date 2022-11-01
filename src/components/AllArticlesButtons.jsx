import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AllArticlesButtons = ({ setSelectedTopic }) => {
  const btnGrpStyle = {
    margin: "25px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  };

  function handleClick(event) {
    setSelectedTopic(event.target.value);
  }

  return (
    <>
      <ButtonGroup style={btnGrpStyle}>
        <LinkContainer to="/articles/all">
          <Button onClick={handleClick} variant="success" value="">
            All
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/cooking">
          <Button onClick={handleClick} variant="warning" value="cooking">
            Cooking
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/coding">
          <Button onClick={handleClick} variant="info" value="coding">
            Coding
          </Button>
        </LinkContainer>
        <LinkContainer to="/articles/football">
          <Button onClick={handleClick} variant="danger" value="football">
            Football
          </Button>
        </LinkContainer>
      </ButtonGroup>
    </>
  );
};

export default AllArticlesButtons;
