import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData(url);
  }, []);

  const loadData = async (url) => {
    const response = await fetch(url);

    const responseJSON = await response.json();

    const temp = responseJSON.data;
    setData(temp);
  };

  return [data];
};

export default useFetch;
