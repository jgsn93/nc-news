import "bootstrap/dist/css/bootstrap.min.css";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* / and /home routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <AllArticles />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <AllArticles />
              </>
            }
          />

          {/* /articles routes */}
          <Route
            path="/articles"
            element={
              <>
                <Header />
                <AllArticles />
              </>
            }
          />

          {/* /articles/:category routes */}
          <Route
            path="/articles/:category"
            element={
              <>
                <Header />
                <AllArticles />
              </>
            }
          />

          {/* /articles/:article_id routes */}
          <Route
            path="/articles/:category/:article_id"
            element={
              <>
                <Header />
                <SingleArticle />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
