import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllArticlesCards from "./AllArticlesCards";
import AllArticlesButtons from "./AllArticlesButtons";
import { fetchArticles, fetchArticlesByTopic } from "../utils/api";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  console.log(category);

  useEffect(() => {
    setIsLoading(true);
    if (category === "all" || !category) {
      fetchArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
      fetchArticlesByTopic(category)
        .then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        })
        .catch((err) => {});
    }
  }, [category]);

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
        <AllArticlesButtons />
        <AllArticlesCards articles={articles} />
      </>
    );
  }
};

export default AllArticles;
