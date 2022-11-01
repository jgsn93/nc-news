import { Link } from "react-router-dom";
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
        <Button onClick={handleClick} variant="success" value="">
          <Link to="/articles/all">All</Link>
        </Button>
        <Button onClick={handleClick} variant="warning" value="cooking">
          <Link to="/articles/cooking">Cooking</Link>
        </Button>
        <Button onClick={handleClick} variant="info" value="coding">
          <Link to="/articles/coding">Coding</Link>
        </Button>
        <Button onClick={handleClick} variant="danger" value="football">
          <Link to="/articles/football"> Football</Link>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default AllArticlesButtons;
