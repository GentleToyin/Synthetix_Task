import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";
import { getToken, checkTokenStatus, searchArticle } from "./services";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [empty, setEmpty] = useState("You have not made a search");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(
    sessionStorage.getItem("syn-token")
  );

  useEffect(() => {
    userToken === null && handleGetToken();
    handleCheckToken();
  }, []);

  const handleGetToken = async () => {
    try {
      const { data: res } = await getToken();
      sessionStorage.setItem("syn-token", res.token);
      setUserToken(res.token);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchArticle = async () => {
    setLoading(true);
    const data = {
      userid: 123456,
      query: query,
      channel: 14,
      highlight: true,
      autosuggest: false,
    };
    try {
      const { data: res } = await searchArticle(data, userToken);
      res.results ? setArticles(res.results) : setEmpty(res.intent.answer);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setQuery("");
  };
  const handleCheckToken = async () => {
    try {
      const { data: res } = await checkTokenStatus();
      if (res.ValidToken === false || res.Expired === true) {
        handleGetToken();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <Header
          setQuery={setQuery}
          handleSearchArticle={handleSearchArticle}
          keyUp={(e) => e.code === "Enter" && handleSearchArticle()}
          query={query}
        />
      </div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <section
          style={{
            marginTop: "100px",
            display: "flex",
            padding: "0 2%",
            gap: "1%",
            flexWrap: "wrap",
          }}
          className="cards_section"
        >
          {articles.length > 0 ? (
            articles.map((article, i) => (
              <div className="news_card" key={i}>
                <NewsCard article={article} token={userToken} />
              </div>
            ))
          ) : (
            <div style={{ fontSize: "20px" }}>{empty}</div>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
