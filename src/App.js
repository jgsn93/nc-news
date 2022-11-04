import "bootstrap/dist/css/bootstrap.min.css";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import ErrorRoute from "./components/ErrorRoute";
import AllArticlesButtons from "./components/AllArticlesButtons";

function App() {
  const user = "tickle122";

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        <Routes>
          {/* / route */}
          <Route path="/" element={<AllArticles />} />

          {/* /articles/:category routes */}
          <Route path="/articles/:category" element={<AllArticles />} />

          {/* /articles/:article_id routes */}
          <Route
            path="/articles/:category/:article_id"
            element={<SingleArticle user={user} />}
          />
          {/* Error route */}
          <Route
            path="*"
            element={
              <>
                <AllArticlesButtons />
                <ErrorRoute />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
