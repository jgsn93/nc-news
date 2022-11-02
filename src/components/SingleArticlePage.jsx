import SingleArticleVotes from "./SingleArticleVotes";

const SingleArticlePage = ({ data }) => {
  let readableDate = data["created_at"].slice(0, 10);

  console.log(data);

  return (
    <div style={{ margin: "50px 50px 50px 50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        {data.title}
      </h1>
      <h4>Published: {readableDate}</h4>
      <h5 style={{ marginBottom: "50px" }}>By {data.author}</h5>
      <p>{data.body}</p>
      <SingleArticleVotes article_id={data.article_id} votes={data.votes} />
    </div>
  );
};

export default SingleArticlePage;
