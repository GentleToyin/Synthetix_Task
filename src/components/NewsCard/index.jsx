import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import image from "../../assets/breaking_news.jpeg";
import logo from "../../assets/logo_synthetix.webp";
import { postArticle } from "../../services";
import "./newscard.css";

const NewsCard = ({ article, token }) => {
  const [result, setResult] = useState();
  const [safeHTML, setSafeHTML] = useState("");

  useEffect(() => {
    handlePostArticle();
  }, [article]);

  const handlePostArticle = async () => {
    const data = {
      userid: 123456,
      label: article.label,
      channel: 14,
      highlight: true,
      autosuggest: false,
    };
    try {
      const { data: res } = await postArticle(data, token);
      setResult(res);
      if (res.answer) {
        const mySafeHTML = DOMPurify.sanitize(res.answer, {
          ALLOWED_TAGS: ["h1", "p", "span", "img", "iframe", "div"],
          FORBID_TAGS: ["br"],
          ALLOWED_ATTR: ["src"],
        });
        setSafeHTML(mySafeHTML);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newscard_container">
      <div
        style={{
          height: "auto",
          minHeight: "10%",
          padding: "0 2%",
        }}
        className="article_header"
      >
        {" "}
        <h4>{result && result.question}</h4>
      </div>
      <div
        style={{
          width: "100%",
          height: "72%",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: safeHTML }}
          style={{
            width: "93%",
            height: "50%",
            paddingLeft: "10px",
            paddingRight: "10px",
            display: "flex",
            flexDirection: "column",
            color: "#44403D",
            fontWeight: "300",
          }}
        />
      </div>
      <div className="article_badge">
        <div
          style={{
            height: "30px",
            borderRadius: "30px",
            width: "100px",
            maxWidth: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10px",
            background: "-webkit-linear-gradient(315deg, #6f3e9e, #c9249e)",
          }}
        >
          <span style={{ color: "white" }}>{result?.category}</span>
        </div>
        <div className="author">
          <span>by: {result?.lasteditedauthor}</span>
          <span>at: {result?.lastediteddate}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
