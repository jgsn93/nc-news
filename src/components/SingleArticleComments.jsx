import { fetchCommentsByArticleId } from "../utils/api";
import { useState, useEffect } from "react";
import SingleArticleCommCard from "./SingleArticleCommCard";
import SingleArticlePostComment from "./SingleArticlePostComment";

const SingleArticleComments = ({ article_id, user }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newComment, setNewComment] = useState();
  const [deleteComment, setDeleteComment] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [article_id, newComment, deleteComment]);

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
        <SingleArticleCommCard
          comments={comments}
          user={user}
          setDeleteComment={setDeleteComment}
        />
      </>
    );
  }
};

export default SingleArticleComments;
