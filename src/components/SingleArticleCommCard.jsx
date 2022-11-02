import Card from "react-bootstrap/Card";
import Avvvatars from "avvvatars-react";

const SingleArticleCommCard = ({ comments }) => {
  console.log(comments);
  return (
    <div style={{ marginTop: "100px" }}>
      {comments.map((comment, index) => (
        <Card key={index}>
          <Card.Body>
            <Avvvatars value={comment.author} />
            <h5 style={{ marginTop: "10px" }}>{comment.author}</h5>
            <h5>{comment["created_at"].slice(0, 10)}</h5>
            <p>{comment.body}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SingleArticleCommCard;
