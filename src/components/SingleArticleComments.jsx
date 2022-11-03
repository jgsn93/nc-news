import { fetchCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import SingleArticleCommCard from "./SingleArticleCommCard";
import SingleArticlePostComment from "./SingleArticlePostComment";

const SingleArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [article_id, newComment]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <>
        <SingleArticlePostComment
          article_id={article_id}
          newComment={newComment}
          setNewComment={setNewComment}
        />
        <SingleArticleCommCard comments={comments} />
      </>
    );
  }
};

export default SingleArticleComments;
