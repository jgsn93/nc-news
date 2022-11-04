import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://josh-geeson-backend-project.herokuapp.com/api",
});

export const fetchArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return newsApi.get(`/articles`, { params: { topic: topic } }).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticlesWithParams = (sort, order, topic) => {
  if (!topic || topic === "all") {
    return newsApi
      .get(`articles`, {
        params: { sort_by: sort, order: order },
      })
      .then((res) => {
        return res.data.articles;
      });
  } else {
    return newsApi
      .get(`articles`, {
        params: { sort_by: sort, order: order, topic: topic },
      })
      .then((res) => {
        console.log(res.data.articles);
        return res.data.articles;
      });
  }
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
