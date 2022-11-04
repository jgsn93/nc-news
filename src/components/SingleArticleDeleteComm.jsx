import { deleteCommentByCommentId } from "../utils/api";
import { Button } from "react-bootstrap";

const SingleArticleDeleteComm = ({ id, setDeleteComment }) => {
  const handleClick = () => {
    deleteCommentByCommentId(id).then(() => {
      alert("Comment successfully deleted");
      setDeleteComment(id);
    });
  };

  return (
    <Button size="sm" variant="danger" onClick={handleClick}>
      Delete
    </Button>
  );
};

export default SingleArticleDeleteComm;
