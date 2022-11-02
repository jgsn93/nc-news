import "bootstrap/dist/css/bootstrap.min.css";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* / route */}
          <Route path="/" element={<AllArticles />} />

          {/* /articles/:category routes */}
          <Route path="/articles/:category" element={<AllArticles />} />

          {/* /articles/:article_id routes */}
          <Route
            path="/articles/:category/:article_id"
            element={<SingleArticle />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
