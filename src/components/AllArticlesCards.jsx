import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AllArticlesCards = ({ articles }) => {
  console.log(articles);

  return (
    <Row xs={1} md={2} className="g-4" style={{ margin: "50px 50px 0px 50px" }}>
      {articles.map((article) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.author}</Card.Text>
              <Card.Subtitle text="primary">Read more</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllArticlesCards;
