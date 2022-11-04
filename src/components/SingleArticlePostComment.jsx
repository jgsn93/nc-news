import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { sendCommentByArticleId } from "../utils/api";

const SingleArticlePostComment = ({ article_id, setNewComment }) => {
  const [username, setUsername] = useState("tickle122");
  const [comment, setComment] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("Missing credentials");
    } else {
      event.preventDefault();
      setValidated(true);
      sendCommentByArticleId(article_id, username, comment).then(() => {
        setNewComment({ username, comment });
      });
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Form
      noValidate
      validated={validated}
      style={{ marginTop: "50px", textAlign: "center" }}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Enter username</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="validationCustom02"
        style={{ height: "100px" }}
      >
        <Form.Label>Comment</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Comment"
          onChange={handleCommentChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SingleArticlePostComment;
