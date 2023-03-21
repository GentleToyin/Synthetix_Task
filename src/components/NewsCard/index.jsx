import React from "react";
import image from "../../assets/breaking_news.jpeg";
import logo from "../../assets/logo_synthetix.webp";
import "./newscard.css";

const NewsCard = ({ article }) => {
  return (
    <div className="newscard_container">
      <div style={{ width: "100%", height: "65%" }}>
        <img
          src={image}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "35%",
          display: "flex",
          justifyContent: "center",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "5px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              color: "#1C1917",
            }}
          >
            {article.faq}
          </span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                height: "30px",
                borderRadius: "30px",
                width: "auto",
                maxWidth: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 10px",

                background: "-webkit-linear-gradient(315deg, #6f3e9e, #c9249e)",
              }}
            >
              <span style={{ color: "white" }}>
                {article.taxonomy.category}
              </span>
            </div>
            <div
              style={{
                height: "30px",
                borderRadius: "30px",
                width: "auto",
                maxWidth: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img style={{ width: "100%", height: "100%" }} src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
