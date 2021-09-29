import React, {useEffect, useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const toupperCase = (strings) => {
    return strings.charAt(0).toUpperCase() + strings.slice(1);
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
      

  const updateNews = async () => {
    props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(40);
    console.log(parsedData);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${toupperCase(props.category)} - Gorilla News Networks`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" , marginTop: "50px"}}>
          Goriila News- {toupperCase(props.category)} Top Headline{" "}
        </h1>
        { loading && <Spinner />}
        <InfiniteScroll
          dataLength={ articles.length}
          next={fetchMoreData}
          hasMore={ articles.length !==  totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              { articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name ? element.source.name : ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

export default News;




News.defaultProps = {
  country: "gb",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};