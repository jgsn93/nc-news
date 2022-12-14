import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://josh-geeson-backend-project.herokuapp.com/api",
});

export const fetchArticles = (sort, order, topic) => {
  const params = {
    topic: topic,
    sort_by: sort,
    order: order,
  };

  for (const key of Object.keys(params)) {
    if (params[key] === "" || params[key] === "all") {
      delete params[key];
    }
  }
  return newsApi.get(`/articles`, { params }).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const updateArticleById = (article_id, vote) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.alert(err.message);
    });
};

export const sendCommentByArticleId = (article_id, username, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((res) => {
    console.log(res);
  });
};
