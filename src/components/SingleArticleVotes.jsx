import { useState } from "react";
import { updateArticleById } from "../utils/api";

const SingleArticleVotes = ({ article_id, votes }) => {
  const [likes, setLikes] = useState(votes);
  const [isClicked, setIsClicked] = useState(false);
  let apiVoteCounter = 0;

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
      apiVoteCounter--;
      updateArticleById(article_id, apiVoteCounter);
    } else {
      setLikes(likes + 1);
      apiVoteCounter++;
      updateArticleById(article_id, apiVoteCounter);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button onClick={handleClick}>
      <span className="likes-counter">{`Like | ${likes}`}</span>
    </button>
  );
};

export default SingleArticleVotes;
