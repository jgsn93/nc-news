import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AllArticlesCards from "./AllArticlesCards";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://josh-geeson-backend-project.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, []);

  function getFilteredList() {
    if (!selectedTopic) {
      return articles;
    }
    return articles.filter((article) => article.topic === selectedTopic);
  }

  const filteredList = useMemo(getFilteredList, [selectedTopic, articles]);

  function handleClick(event) {
    setSelectedTopic(event.target.value);
  }

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  } else {
    const btnStyle = {
      marginTop: "25px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
    };

    return (
      <>
        <ButtonGroup style={btnStyle}>
          <Button onClick={handleClick} variant="success" value="">
            All
          </Button>
          <Button onClick={handleClick} variant="warning" value="cooking">
            Cooking
          </Button>
          <Button onClick={handleClick} variant="info" value="coding">
            Coding
          </Button>
          <Button onClick={handleClick} variant="danger" value="football">
            Football
          </Button>
        </ButtonGroup>
        <AllArticlesCards articles={filteredList} />
      </>
    );
  }
};

export default AllArticles;
