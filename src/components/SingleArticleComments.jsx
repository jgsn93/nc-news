import { fetchCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import SingleArticleCommCard from "./SingleArticleCommCard";

const SingleArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [article_id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else {
    return <SingleArticleCommCard comments={comments} />;
  }
};

export default SingleArticleComments;
