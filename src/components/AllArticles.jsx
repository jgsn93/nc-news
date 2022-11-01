import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import AllArticlesCards from "./AllArticlesCards";
import AllArticlesButtons from "./AllArticlesButtons";
import { fetchArticles } from "../utils/api";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState();
  const { category } = useParams();

  useEffect(() => {
    fetchArticles().then((articles) => {
      const topicArr = ["coding", "cooking", "football"];
      if (topicArr.includes(category)) {
        const articlesCategory = articles.filter((article) => {
          return article.topic === category;
        });
        setArticles(articlesCategory);
        setIsLoading(false);
      } else {
        setArticles(articles);
        setIsLoading(false);
      }
    });
  }, [articles, category]);

  function getFilteredList() {
    if (!selectedTopic) {
      return articles;
    }
    return articles.filter((article) => article.topic === selectedTopic);
  }

  const filteredList = useMemo(getFilteredList, [selectedTopic, articles]);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  } else {
    return (
      <>
        <AllArticlesButtons setSelectedTopic={setSelectedTopic} />
        <AllArticlesCards articles={filteredList} />
      </>
    );
  }
};

export default AllArticles;
