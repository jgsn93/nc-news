import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AllArticlesCards from "./AllArticlesCards";
import AllArticlesButtons from "./AllArticlesButtons";
import AllArticlesSortBy from "./AllArticlesSortBy";
import { fetchArticles } from "../utils/api";

const AllArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const queries = [...searchParams];

  useEffect(() => {
    setIsLoading(true);
    if (Object.keys(queries).length >= 2) {
      const query1 = queries[0][1];
      const query2 = queries[1][1];

      fetchArticles(query1, query2, category).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
      fetchArticles("", "", category ? category : "").then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [category, searchParams]);

  if (isLoading) {
    return (
      <>
        <AllArticlesButtons />
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
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
