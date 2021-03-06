import React from "react";

const NewsItem = (props) => {
  let { imageUrl, description, title, newsUrl, author, date, source } = props;

  return (
    <div className="my-3" style={{ margin: "45px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0px",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={imageUrl ? imageUrl : "https://images.wsj.net/im-481005/social"}
          alt="No Img available"
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-danger"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
