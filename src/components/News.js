import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFrstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFrstLetter(props.category)}-NewsMagnet`;

    async function fetchData() {
      props.setProgress(30);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      props.setProgress(45);
      let parsedData = await data.json();
      props.setProgress(75);
      console.log(parsedData);
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
      props.setProgress(100);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h1>NewsMagnet - Top {capitalizeFrstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="news">
          {articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
