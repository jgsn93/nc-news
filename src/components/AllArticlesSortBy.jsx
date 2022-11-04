import { useState } from "react";
import { Button } from "react-bootstrap";

const AllArticlesSortBy = ({ setSearchParams }) => {
  const [menuParams, setMenuParams] = useState({
    sort_by: "",
    order: "asc",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuParams({ ...menuParams, [name]: value });
  };

  const handleClick = () => {
    const paramsString = `sort_by=${menuParams.sort_by}&order=${menuParams.order}`;
    const searchParams = new URLSearchParams(paramsString);

    if (menuParams.sort_by === "") {
      alert("Both search parameters required");
    } else {
      setSearchParams(searchParams);
    }
  };

  const style = {
    fontSize: "20px",
    width: "100vw",
    textAlign: "center",
    position: "relative",
  };

  return (
    <div style={style}>
      <label style={{ marginRight: "10px" }}>Sort by:</label>
      <select
        style={{ marginRight: "10px", width: "10%" }}
        onChange={handleChange}
        value={menuParams.sort_by}
        id="sort_by"
        name="sort_by"
      >
        <option value="">None</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
      <select
        style={{ marginRight: "10px", width: "10%" }}
        onChange={handleChange}
        value={menuParams.order}
        id="order"
        name="order"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <Button
        size="sm"
        variant="dark"
        style={{
          padding: "0px 10px 0px 10px",
        }}
        onClick={handleClick}
      >
        Update
      </Button>
    </div>
  );
};

export default AllArticlesSortBy;
