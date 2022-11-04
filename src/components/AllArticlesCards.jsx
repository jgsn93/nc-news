import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const AllArticlesCards = ({ articles }) => {
  return (
    <Row
      xs={1}
      md={2}
      className="g-4"
      style={{ margin: "50px 50px 50px 50px" }}
    >
      {articles.map((article, index) => (
        <Col key={index}>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title className="text-center">{article.title}</Card.Title>
              <Card.Text className="text-center">{article.author}</Card.Text>
              <Card.Text>
                <strong>🗳️ Votes: {article.votes}</strong>
              </Card.Text>
              <Card.Text>
                <strong>💬 Comments: {article.comment_count}</strong>
              </Card.Text>
              <Card.Subtitle className="text-center" text="primary">
                <Link to={`/articles/${article.topic}/${article.article_id}`}>
                  Read more
                </Link>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllArticlesCards;
