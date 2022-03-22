import React from "react";
import "./style.scss";
import useAxios from "../../hooks/axios-hook";
import useInput from "../../hooks/input-hook";

export default function Home() {
  const url = `http://www.omdbapi.com/?i=tt5896198&apikey=ceb49fd4`;
  const {
    value: search,
    change: changeSearch,
    reset: resetSearch,
  } = useInput("");
  const { result } = useAxios(url, "get");
  console.log(result);
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
          <input
            placeholder="Enter your password"
            type="password"
            {...changeSearch}
          />
          <button>ewe</button>
        </div>
      </div>
    </div>
  );
}
