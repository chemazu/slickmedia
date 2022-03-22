import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useAxios(url, method, body = null, headers = null) {
  const [result, setResult] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);
  const fetchData = async () => {
    try {
      const res = await axios[method](
        url,
        JSON.parse(headers),
        JSON.parse(body)
      );
      setResult(res);
      setIsPending(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);
  return { result, error, isPending };
}
