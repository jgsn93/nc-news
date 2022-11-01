import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import AllArticlesButtons from "./AllArticlesButtons";
import SingleArticlePage from "./SingleArticlePage";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((response) => {
      setIsLoading(false);
      setSingleArticle(response);
    });
  }, [article_id]);

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
        <SingleArticlePage data={singleArticle} />
      </>
    );
  }
};

export default SingleArticle;
