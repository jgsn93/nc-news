import SingleArticleComments from "./SingleArticleComments";
import SingleArticleVotes from "./SingleArticleVotes";
import Avvvatars from "avvvatars-react";

const SingleArticlePage = ({ data, user }) => {
  let readableDate = data["created_at"].slice(0, 10);

  return (
    <div style={{ margin: "50px 50px 50px 50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        {data.title}
      </h1>
      <h4>Published: {readableDate}</h4>
      <Avvvatars value={data.author} />
      <h5 style={{ marginTop: "10px", marginBottom: "50px" }}>
        By {data.author}
      </h5>
      <p>{data.body}</p>
      <SingleArticleVotes article_id={data.article_id} votes={data.votes} />
      <SingleArticleComments article_id={data.article_id} user={user} />
    </div>
  );
};

export default SingleArticlePage;
