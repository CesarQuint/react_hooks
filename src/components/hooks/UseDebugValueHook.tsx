import { useState, useEffect, useDebugValue } from "react";

export default function UseFetch({ url }: { url: string }): any {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setData(data));
  }, [url]);

  useDebugValue(data ? `Data loaded: ${data.length} items` : "Loading...");

  return data;
}
