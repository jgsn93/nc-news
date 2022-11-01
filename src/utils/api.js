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
  return newsApi.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};

export const fetchArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
