import { useState } from "react";
import "./App.css";
import Home from "./view/Home";
import useAxios from "./hooks/axios-hook";

function App() {
  //updates query

  const [query, setQuery] = useState("Batman");

  const url = `https://www.omdbapi.com/?s=${query}&apikey=ceb49fd4`;

  //custom hook to make requests

  const { result, isPending } = useAxios(url, "get");

  const controls = { result, query, setQuery };

  return (
    <div className="App">
      {isPending && <Home controls={controls} />}
      {!isPending && <p>Loading....</p>}
    </div>
  );
}

export default App;
