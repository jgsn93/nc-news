import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AllArticlesCards from "./AllArticlesCards";
import AllArticlesButtons from "./AllArticlesButtons";
import AllArticlesSortBy from "./AllArticlesSortBy";
import {
  fetchArticles,
  fetchArticlesByTopic,
  fetchArticlesWithParams,
} from "../utils/api";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const queries = [...searchParams];

  useEffect(() => {
    setIsLoading(true);
    if (category === "all" || !category) {
      if (Object.keys(queries).length <= 1) {
        fetchArticles().then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        });
      } else {
        const param1 = queries[0][1];
        const param2 = queries[1][1];

        fetchArticlesWithParams(param1, param2).then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        });
      }
    } else {
      if (category && Object.keys(queries).length === 0) {
        fetchArticlesByTopic(category).then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        });
      } else {
        const param1 = queries[0][1];
        const param2 = queries[1][1];

        fetchArticlesWithParams(param1, param2, category).then((articles) => {
          setArticles(articles);
          setIsLoading(false);
        });
      }
    }
  }, [category, searchParams]);

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
        <AllArticlesSortBy
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <AllArticlesCards articles={articles} />
      </>
    );
  }
};

export default AllArticles;
