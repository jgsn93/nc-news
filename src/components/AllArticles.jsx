import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllArticlesCards from "./AllArticlesCards";
import AllArticlesButtons from "./AllArticlesButtons";
import {
  fetchArticles,
  fetchArticlesByTopic,
  fetchArticlesByTopicAndSorted,
} from "../utils/api";
import AllArticlesSortBy from "./AllArticlesSortBy";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState("asc");
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if ((!sortBy && category === "all") || !category) {
      console.log("condition 1");
      fetchArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else if ((sortBy && category === "all") || !category) {
      console.log("condition 2");
      fetchArticlesByTopicAndSorted(category, sortBy, orderBy).then(
        (articles) => {
          setArticles(articles);
          setIsLoading(false);
        }
      );
    } else {
      console.log("condition 3");
      fetchArticlesByTopic(category).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [category, sortBy, orderBy]);

  if (isLoading) {
    return (
      <>
        <AllArticlesButtons />
        <h2 style={{ textAlign: "center" }}>Loading...</h2>;
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setSortBy("created_at")}>Sort By</button>
        <button onClick={() => setOrderBy("desc")}>Order By</button>
        <AllArticlesButtons />
        <AllArticlesSortBy />
        <AllArticlesCards articles={articles} />
      </>
    );
  }
};

export default AllArticles;
