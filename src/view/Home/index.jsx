import React from "react";
import "./style.scss";
import useInput from "../../hooks/input-hook";
import glass from "../../resource/glass.svg";

export default function Home(props) {
  const { result, query, setQuery } = props.controls;

  const Search = result.data.Search;

  const {
    value: search,
    change: changeSearch,
    reset: resetSearch,
  } = useInput("");

  //   search
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    resetSearch();
  };

  return (
    <div>
      <div className="nav">
        <p>MyTestApp</p>
      </div>
      <div className="header">
        <h1>Watch something incredible.</h1>
      </div>
      <div className="search">
        <p>Search</p>
        <div className="form-item">
          <input placeholder="Search" type="text" {...changeSearch} />
          <button onClick={handleSearch}>
            <img src={glass} />
          </button>
        </div>
      </div>

      <div className="result-section">
        <p style={{ padding: "10px 5%" }}>{query}</p>
        <div className="categories">
          {Search.map((item) => {
            const { Title, Poster } = item;
            return (
              <div
                style={{ background: `url(${Poster})` }}
                className="movies"
                key={Title}
              >
                <p>{Title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="result-section">
        <p style={{ padding: "10px 5%" }}>{query}</p>
        <div className="categories">
          {Search.map((item) => {
            const { Title, Poster } = item;
            return (
              <div
                style={{ background: `url(${Poster})` }}
                className="movies"
                key={Title}
              >
                <p>{Title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
