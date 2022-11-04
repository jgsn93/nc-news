import Card from "react-bootstrap/Card";
import Avvvatars from "avvvatars-react";
import SingleArticleDeleteComm from "./SingleArticleDeleteComm";

const SingleArticleCommCard = ({ comments, user, setDeleteComment }) => {
  console.log(user);
  return (
    <div style={{ marginTop: "50px" }}>
      {comments.map((comment, index) => (
        <Card key={index}>
          <Card.Body>
            <Avvvatars value={comment.author} />
            <h5 style={{ marginTop: "10px" }}>{comment.author}</h5>
            <h5>{comment["created_at"].slice(0, 10)}</h5>
            <p>{comment.body}</p>
            {user === comment.author && (
              <SingleArticleDeleteComm
                id={comment.comment_id}
                setDeleteComment={setDeleteComment}
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SingleArticleCommCard;
