const SingleArticlePage = ({ data }) => {
  console.log(data);

  let readableDate = data["created_at"].slice(0, 10);

  return (
    <div style={{ margin: "50px 50px 50px 50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        {data.title}
      </h1>
      <h4>Published: {readableDate}</h4>
      <h5 style={{ marginBottom: "50px" }}>By {data.author}</h5>
      <p>{data.body}</p>
    </div>
  );
};

export default SingleArticlePage;
